import { Link, useLocation } from "wouter";
import { categories } from "@/data/categories";

export function CategoryNav() {
  const [location] = useLocation();
  const isShop = location.startsWith("/shop");

  return (
    <div className="hidden lg:block border-b border-border bg-card/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-2">
          <Link href="/shop">
            <span
              className={`px-3 py-1.5 text-sm font-medium rounded-md hover-elevate active-elevate-2 cursor-pointer whitespace-nowrap ${
                isShop ? "text-primary" : "text-foreground"
              }`}
              data-testid="link-catnav-all"
            >
              All Categories
            </span>
          </Link>
          <span className="text-border">|</span>
          {categories.map((c) => (
            <Link key={c.id} href={`/shop?category=${c.slug}`}>
              <span
                className="px-3 py-1.5 text-sm text-muted-foreground rounded-md hover-elevate active-elevate-2 cursor-pointer whitespace-nowrap"
                data-testid={`link-catnav-${c.slug}`}
              >
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
