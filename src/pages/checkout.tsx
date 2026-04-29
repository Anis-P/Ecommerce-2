import { useState, FormEvent } from "react";
import { Link, useLocation } from "wouter";
import { ChevronRight, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/format";

export default function Checkout() {
  const { items, subtotal, count, clear } = useCart();
  const [, navigate] = useLocation();
  const [orderId, setOrderId] = useState<string | null>(null);
  const FREE_THRESHOLD = 499;
  const delivery = subtotal === 0 ? 0 : subtotal >= FREE_THRESHOLD ? 0 : 49;
  const total = subtotal + delivery;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine: "",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "",
    notes: "",
    payment: "cod",
  });

  const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = "GLY-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    clear();
  };

  if (items.length === 0 && !orderId) {
    return (
      <section className="container mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl font-semibold mb-3">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some products before proceeding to checkout.</p>
        <Link href="/shop">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover-elevate active-elevate-2" data-testid="button-go-shop">
            Browse Shop <ArrowRight size={16} />
          </button>
        </Link>
      </section>
    );
  }

  if (orderId) {
    return (
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-xl mx-auto bg-card border border-card-border rounded-3xl p-10 text-center" data-testid="card-order-success">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="font-serif text-3xl font-semibold mb-2">Order placed successfully</h1>
          <p className="text-muted-foreground mb-6">Thank you for shopping with Glossary. Your order is on its way.</p>
          <div className="bg-muted/40 rounded-xl p-4 mb-6 text-sm">
            <p className="text-muted-foreground">Order ID</p>
            <p className="font-serif text-2xl font-bold text-primary tracking-wider" data-testid="text-order-id">{orderId}</p>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            A confirmation has been recorded locally. You'll receive delivery updates via SMS on your registered number.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/"><button className="bg-card border border-border text-foreground font-semibold px-6 py-3 rounded-full hover-elevate active-elevate-2" data-testid="button-back-home">Back to Home</button></Link>
            <button onClick={() => { setOrderId(null); navigate("/shop"); }} className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover-elevate active-elevate-2" data-testid="button-continue-shopping-success">Continue Shopping</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
        <Link href="/"><span className="hover:text-foreground cursor-pointer">Home</span></Link>
        <ChevronRight size={12} />
        <Link href="/cart"><span className="hover:text-foreground cursor-pointer">Cart</span></Link>
        <ChevronRight size={12} />
        <span className="text-foreground font-medium">Checkout</span>
      </nav>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_360px] gap-8" data-testid="form-checkout">
        <div className="space-y-6">
          <div className="bg-card border border-card-border rounded-2xl p-6">
            <h2 className="font-serif text-xl font-semibold mb-5">Contact information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" required><input required value={form.fullName} onChange={handleChange("fullName")} className={inputCls} placeholder="Aarav Sharma" data-testid="input-fullname" /></Field>
              <Field label="Email" required><input required type="email" value={form.email} onChange={handleChange("email")} className={inputCls} placeholder="aarav@example.com" data-testid="input-email" /></Field>
              <Field label="Phone" required><input required type="tel" value={form.phone} onChange={handleChange("phone")} className={inputCls} placeholder="+91 98765 43210" data-testid="input-phone" /></Field>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-6">
            <h2 className="font-serif text-xl font-semibold mb-5">Delivery address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Field label="Address line" required><input required value={form.addressLine} onChange={handleChange("addressLine")} className={inputCls} placeholder="Flat 12B, Building Name, Street" data-testid="input-address" /></Field>
              </div>
              <Field label="City" required><input required value={form.city} onChange={handleChange("city")} className={inputCls} data-testid="input-city" /></Field>
              <Field label="State" required><input required value={form.state} onChange={handleChange("state")} className={inputCls} data-testid="input-state" /></Field>
              <Field label="Pincode" required><input required value={form.pincode} onChange={handleChange("pincode")} pattern="[0-9]{6}" className={inputCls} placeholder="400050" data-testid="input-pincode" /></Field>
              <div className="sm:col-span-2">
                <Field label="Order notes (optional)"><textarea value={form.notes} onChange={handleChange("notes")} rows={3} className={inputCls} placeholder="Leave at the gate, ring bell twice..." data-testid="input-notes" /></Field>
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-6">
            <h2 className="font-serif text-xl font-semibold mb-5">Payment method</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { value: "cod", title: "Cash on Delivery", subtitle: "Pay when you receive" },
                { value: "upi", title: "UPI", subtitle: "Google Pay, PhonePe, Paytm" },
                { value: "card", title: "Card", subtitle: "Credit / Debit cards" },
                { value: "netbanking", title: "Net Banking", subtitle: "All major Indian banks" },
              ].map((p) => (
                <label
                  key={p.value}
                  className={`relative flex items-start gap-3 p-4 rounded-xl border cursor-pointer hover-elevate ${
                    form.payment === p.value ? "border-primary bg-primary/5" : "border-border bg-card"
                  }`}
                  data-testid={`label-payment-${p.value}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={p.value}
                    checked={form.payment === p.value}
                    onChange={handleChange("payment")}
                    className="mt-1 accent-primary"
                  />
                  <div>
                    <p className="font-semibold text-sm">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4">
            <h2 className="font-serif text-xl font-semibold">Order Summary</h2>
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3" data-testid={`summary-item-${item.id}`}>
                  <div className="relative w-14 h-14 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.unit}</p>
                  </div>
                  <p className="text-sm font-semibold">{formatINR(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal ({count})</span><span className="font-semibold">{formatINR(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="font-semibold">{delivery === 0 ? <span className="text-primary">FREE</span> : formatINR(delivery)}</span></div>
              <div className="border-t border-border pt-2 flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-serif font-bold text-xl">{formatINR(total)}</span>
              </div>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2" data-testid="button-place-order">
              Place Order
            </button>
            <p className="text-xs text-center text-muted-foreground inline-flex items-center justify-center gap-1.5"><Shield size={12} /> Secure checkout</p>
          </div>
        </aside>
      </form>
    </section>
  );
}

const inputCls = "w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground mb-1.5 block">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
