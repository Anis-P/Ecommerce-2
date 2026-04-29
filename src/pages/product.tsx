import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ChevronRight, Heart, Truck, ShieldCheck, RefreshCcw, Check } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/hooks/use-toast";
import { formatINR } from "@/lib/format";
import { RatingStars } from "@/components/RatingStars";
import { QuantitySelector } from "@/components/QuantitySelector";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import NotFound from "./not-found";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:slug");
  const product = params ? getProductBySlug(params.slug) : undefined;
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "features" | "delivery">("description");
  const { addItem } = useCart();
  const { hasItem, toggleItem } = useWishlist();
  const { toast } = useToast();

  if (!product) return <NotFound />;

  const wished = hasItem(product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const categoryName = categories.find((c) => c.slug === product.category)?.name || product.category;
  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      mrp: product.mrp,
      image: product.image,
      unit: product.unit,
      quantity: qty,
    });
    toast({ title: "Added to cart", description: `${qty} × ${product.name}` });
  };

  return (
    <>
      <section className="container mx-auto px-4 md:px-8 py-6 md:py-10">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/"><span className="hover:text-foreground cursor-pointer">Home</span></Link>
          <ChevronRight size={12} />
          <Link href={`/shop?category=${product.category}`}><span className="hover:text-foreground cursor-pointer">{categoryName}</span></Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <div className="relative">
            <div className="aspect-square bg-card rounded-3xl border border-card-border overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" data-testid={`img-product-${product.id}`} />
            </div>
            {discount > 0 && (
              <span className="absolute top-5 left-5 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {discount}% OFF
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">{categoryName}</span>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-3" data-testid="text-product-title">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <RatingStars rating={product.rating} size={16} />
              <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-serif text-4xl font-bold text-foreground" data-testid="text-product-price">
                {formatINR(product.price)}
              </span>
              {product.mrp > product.price && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{formatINR(product.mrp)}</span>
                  <span className="text-sm font-semibold text-secondary">Save {formatINR(product.mrp - product.price)}</span>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-6">Pack size: <span className="font-medium text-foreground">{product.unit}</span> · Inclusive of all taxes</p>

            <p className="text-base text-foreground/80 leading-relaxed mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Quantity:</span>
              <QuantitySelector value={qty} onChange={setQty} testIdPrefix="product-qty" />
              <span className="text-sm text-muted-foreground">Total: <span className="font-bold text-foreground">{formatINR(product.price * qty)}</span></span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2"
                data-testid="button-product-add-to-cart"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => toggleItem(product.id)}
                className={`inline-flex items-center justify-center gap-2 border font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2 ${
                  wished ? "bg-secondary/10 border-secondary text-secondary" : "bg-card border-border text-foreground"
                }`}
                data-testid="button-product-wishlist"
              >
                <Heart size={16} className={wished ? "fill-secondary" : ""} />
                {wished ? "Saved" : "Save"}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-card border border-card-border">
                <Truck size={20} className="text-primary mb-1" />
                <p className="text-xs font-semibold">Free Delivery</p>
                <p className="text-[10px] text-muted-foreground">Above ₹499</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-card border border-card-border">
                <ShieldCheck size={20} className="text-primary mb-1" />
                <p className="text-xs font-semibold">Quality Assured</p>
                <p className="text-[10px] text-muted-foreground">100% Fresh</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-card border border-card-border">
                <RefreshCcw size={20} className="text-primary mb-1" />
                <p className="text-xs font-semibold">Easy Returns</p>
                <p className="text-[10px] text-muted-foreground">No questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex border-b border-border gap-2">
            {(["description", "features", "delivery"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-4 py-3 text-sm font-semibold capitalize hover-elevate active-elevate-2 -mb-px border-b-2 ${
                  tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground"
                }`}
                data-testid={`tab-${t}`}
              >
                {t === "delivery" ? "Delivery & Returns" : t}
              </button>
            ))}
          </div>
          <div className="py-6 max-w-3xl text-foreground/80 leading-relaxed">
            {tab === "description" && <p>{product.description} Our {product.name.toLowerCase()} are sourced directly from trusted Indian farms and undergo a strict quality check before being packed for you.</p>}
            {tab === "features" && (
              <ul className="grid sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-card-border">
                    <Check size={16} className="text-primary" /> <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            )}
            {tab === "delivery" && (
              <div className="space-y-3 text-sm">
                <p>• Same-day delivery available on orders placed before 12:00 PM (Mumbai pin codes only).</p>
                <p>• Free delivery on all orders above ₹499. ₹49 delivery fee on smaller orders.</p>
                <p>• Cold-chain logistics for dairy, meat and frozen items.</p>
                <p>• Easy returns within 24 hours of delivery — full refund or replacement.</p>
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <SectionHeading eyebrow="You may also like" title="Related products" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
