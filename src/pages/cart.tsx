import { Link } from "wouter";
import { ChevronRight, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "@/components/QuantitySelector";
import { formatINR } from "@/lib/format";

export default function Cart() {
  const { items, updateQty, removeItem, subtotal, count } = useCart();
  const FREE_THRESHOLD = 499;
  const delivery = subtotal === 0 ? 0 : subtotal >= FREE_THRESHOLD ? 0 : 49;
  const total = subtotal + delivery;
  const remaining = Math.max(0, FREE_THRESHOLD - subtotal);

  return (
    <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
        <Link href="/"><span className="hover:text-foreground cursor-pointer">Home</span></Link>
        <ChevronRight size={12} />
        <span className="text-foreground font-medium">Shopping Cart</span>
      </nav>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">Your Cart</h1>
      <p className="text-sm text-muted-foreground mb-8">{count > 0 ? `${count} item${count > 1 ? "s" : ""} in your cart` : "Your cart is currently empty"}</p>

      {items.length === 0 ? (
        <div className="bg-card border border-card-border rounded-3xl p-12 text-center max-w-xl mx-auto" data-testid="empty-cart">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
            <ShoppingBag size={32} />
          </div>
          <h2 className="font-serif text-2xl font-semibold mb-2">Looks empty in here</h2>
          <p className="text-muted-foreground text-sm mb-6">Browse our fresh produce and add items to your cart.</p>
          <Link href="/shop">
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover-elevate active-elevate-2" data-testid="button-empty-shop">
              Start Shopping <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-card border border-card-border rounded-2xl p-4" data-testid={`row-cart-${item.id}`}>
                <div className="w-24 h-24 rounded-xl bg-muted overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.unit}</p>
                      <h3 className="font-serif text-base font-semibold text-foreground line-clamp-2">{item.name}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 rounded-full hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-destructive flex-shrink-0"
                      aria-label="Remove"
                      data-testid={`button-remove-${item.id}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex items-end justify-between mt-auto pt-2">
                    <QuantitySelector value={item.quantity} onChange={(q) => updateQty(item.id, q)} size="sm" testIdPrefix={`cart-${item.id}`} />
                    <div className="text-right">
                      <p className="font-serif text-lg font-bold text-foreground" data-testid={`text-line-total-${item.id}`}>
                        {formatINR(item.price * item.quantity)}
                      </p>
                      <p className="text-xs text-muted-foreground">{formatINR(item.price)} each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between pt-2">
              <Link href="/shop">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-full" data-testid="button-continue-shopping">
                  ← Continue Shopping
                </button>
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4">
              <h2 className="font-serif text-xl font-semibold">Order Summary</h2>
              {remaining > 0 && (
                <div className="text-xs bg-primary/10 text-primary p-3 rounded-lg" data-testid="banner-free-shipping">
                  Add <span className="font-bold">{formatINR(remaining)}</span> more for free delivery!
                </div>
              )}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({count} items)</span>
                  <span className="font-semibold" data-testid="text-subtotal">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-semibold" data-testid="text-delivery">
                    {delivery === 0 ? <span className="text-primary">FREE</span> : formatINR(delivery)}
                  </span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-serif font-bold text-xl text-foreground" data-testid="text-total">{formatINR(total)}</span>
                </div>
              </div>
              <Link href="/checkout">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2" data-testid="button-checkout">
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">Safe & secure checkout · 100% encrypted</p>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
