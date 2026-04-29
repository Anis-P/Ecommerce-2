import { Link } from "wouter";
import { Heart, Plus, Check } from "lucide-react";
import { useState } from "react";
import { type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatINR } from "@/lib/format";
import { RatingStars } from "./RatingStars";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { hasItem, toggleItem } = useWishlist();
  const { toast } = useToast();
  const [added, setAdded] = useState(false);
  const wished = hasItem(product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      mrp: product.mrp,
      image: product.image,
      unit: product.unit,
    });
    setAdded(true);
    toast({ title: "Added to cart", description: product.name });
    setTimeout(() => setAdded(false), 1400);
  };

  const handleWish = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleItem(product.id);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        className="group relative flex flex-col bg-card rounded-2xl border border-card-border overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full"
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-square bg-muted/30 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
          <button
            type="button"
            onClick={handleWish}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/95 backdrop-blur flex items-center justify-center hover-elevate active-elevate-2 z-10"
            aria-label="Add to wishlist"
            data-testid={`button-wishlist-${product.id}`}
          >
            <Heart size={16} className={wished ? "fill-secondary text-secondary" : "text-foreground"} />
          </button>
        </div>

        <div className="flex flex-col flex-1 p-4">
          <div className="flex-1">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
              {product.unit}
            </p>
            <h3
              className="font-serif text-base font-semibold text-foreground leading-snug line-clamp-2 mb-2"
              data-testid={`text-product-name-${product.id}`}
            >
              {product.name}
            </h3>
            <RatingStars rating={product.rating} showValue reviewCount={product.reviewCount} />
          </div>

          <div className="flex items-end justify-between mt-3 pt-3 border-t border-border">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg font-bold text-foreground" data-testid={`text-price-${product.id}`}>
                  {formatINR(product.price)}
                </span>
                {product.mrp > product.price && (
                  <span className="text-xs text-muted-foreground line-through">{formatINR(product.mrp)}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover-elevate active-elevate-2"
              aria-label="Add to cart"
              data-testid={`button-add-to-cart-${product.id}`}
            >
              {added ? <Check size={16} /> : <Plus size={16} />}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
