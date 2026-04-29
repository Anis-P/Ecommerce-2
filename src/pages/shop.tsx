import { useMemo, useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { formatINR } from "@/lib/format";
import { ChevronRight, SlidersHorizontal } from "lucide-react";

function useQueryParams() {
  const [location] = useLocation();
  return useMemo(() => {
    const qIndex = location.indexOf("?");
    const qs = qIndex >= 0 ? location.slice(qIndex + 1) : (typeof window !== "undefined" ? window.location.search.replace(/^\?/, "") : "");
    return new URLSearchParams(qs);
  }, [location]);
}

export default function Shop() {
  const params = useQueryParams();
  const initialCategory = params.get("category") || "all";
  const initialQuery = params.get("q") || "";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialQuery);
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setCategory(params.get("category") || "all");
    setSearch(params.get("q") || "");
  }, [params]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    list = list.filter((p) => p.price <= maxPrice);
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [category, search, sort, maxPrice]);

  const activeCategoryName = category === "all" ? "All Products" : categories.find((c) => c.slug === category)?.name || "Shop";

  return (
    <>
      <section className="bg-card/40 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-10">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-3" aria-label="Breadcrumb">
            <Link href="/"><span className="hover:text-foreground cursor-pointer">Home</span></Link>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium">{activeCategoryName}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">{activeCategoryName}</h1>
              <p className="text-sm text-muted-foreground mt-1">{filtered.length} products available</p>
            </div>
            <button
              type="button"
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover-elevate active-elevate-2 self-start"
              data-testid="button-toggle-filters"
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          <aside className={`${filterOpen ? "block" : "hidden"} md:block space-y-6`} data-testid="aside-filters">
            <div className="bg-card border border-card-border rounded-2xl p-5">
              <h3 className="font-serif text-base font-semibold mb-4">Categories</h3>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setCategory("all")}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm hover-elevate active-elevate-2 ${
                    category === "all" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                  }`}
                  data-testid="button-filter-all"
                >
                  All ({products.length})
                </button>
                {categories.map((c) => {
                  const count = products.filter((p) => p.category === c.slug).length;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCategory(c.slug)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm hover-elevate active-elevate-2 ${
                        category === c.slug ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                      }`}
                      data-testid={`button-filter-${c.slug}`}
                    >
                      {c.name} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-5">
              <h3 className="font-serif text-base font-semibold mb-4">Search</h3>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-muted/50 rounded-lg px-3 py-2 text-sm outline-none focus:bg-background focus:ring-1 focus:ring-primary"
                data-testid="input-filter-search"
              />
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-5">
              <h3 className="font-serif text-base font-semibold mb-2">Max Price</h3>
              <p className="text-sm text-primary font-bold mb-3">{formatINR(maxPrice)}</p>
              <input
                type="range"
                min={50}
                max={1000}
                step={25}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary"
                data-testid="input-filter-price"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹50</span>
                <span>₹1,000</span>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <p className="text-sm text-muted-foreground">Showing {filtered.length} of {products.length} products</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm outline-none focus:border-primary"
                data-testid="select-sort"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-2xl border border-card-border" data-testid="empty-products">
                <h3 className="font-serif text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground text-sm">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5" data-testid="grid-products">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
