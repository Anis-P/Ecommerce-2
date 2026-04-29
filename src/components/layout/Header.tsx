import { Link, useLocation } from "wouter";
import { Search, Heart, ShoppingCart, Menu, Leaf, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { categories } from "@/data/categories";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location, navigate] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { count: cartCount } = useCart();
  const { count: wishCount } = useWishlist();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center gap-4 md:gap-8">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home-logo">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Leaf size={18} />
            </div>
            <span className="font-serif text-2xl font-bold text-foreground tracking-tight">Glossary</span>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-auto" data-testid="form-search-desktop">
          <div className="relative w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for tomatoes, mangoes, atta..."
              className="w-full bg-muted/50 border border-transparent rounded-full pl-11 pr-5 py-2.5 text-sm outline-none focus:bg-card focus:border-border"
              data-testid="input-search-desktop"
            />
          </div>
        </form>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                className={`px-3 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2 cursor-pointer ${
                  location === l.href ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${l.label.toLowerCase()}`}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="ml-auto lg:ml-0 flex items-center gap-1">
          <Link href="/cart">
            <button className="relative w-10 h-10 rounded-full hover-elevate active-elevate-2 flex items-center justify-center text-foreground hidden sm:flex" aria-label="Wishlist" data-testid="button-header-wishlist">
              <Heart size={18} />
              {wishCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishCount}
                </span>
              )}
            </button>
          </Link>
          <Link href="/cart">
            <button className="relative w-10 h-10 rounded-full hover-elevate active-elevate-2 flex items-center justify-center text-foreground" aria-label="Cart" data-testid="button-header-cart">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" data-testid="text-cart-count">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-full hover-elevate active-elevate-2 flex items-center justify-center text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="md:hidden" data-testid="form-search-mobile">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-muted/50 rounded-full pl-11 pr-5 py-2.5 text-sm outline-none focus:bg-card"
                  data-testid="input-search-mobile"
                />
              </div>
            </form>
            <nav className="grid gap-1">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}>
                  <span
                    className={`block px-3 py-2.5 text-sm font-medium rounded-md hover-elevate active-elevate-2 ${
                      location === l.href ? "text-primary bg-primary/5" : "text-foreground"
                    }`}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-3">Categories</p>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((c) => (
                  <Link key={c.id} href={`/shop?category=${c.slug}`}>
                    <span
                      className="block px-3 py-2 text-sm rounded-md hover-elevate active-elevate-2 text-foreground"
                      onClick={() => setMobileOpen(false)}
                      data-testid={`link-mobile-cat-${c.slug}`}
                    >
                      {c.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
