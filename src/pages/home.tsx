import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CategoryIcon } from "@/components/CategoryIcon";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { OfferBanners } from "@/components/OfferBanners";
import { PromoCards } from "@/components/PromoCard";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { categories } from "@/data/categories";
import { products, getProductsByCategory } from "@/data/products";

export default function Home() {
  const bestSellers = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
  const seasonalPicks = [...products]
    .sort((a, b) => ((b.mrp - b.price) / b.mrp) - ((a.mrp - a.price) / a.mrp))
    .slice(0, 8);

  return (
    <>
      <HeroSection />
      <WhyChooseUs />

      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="Browse by category"
          title="Shop fresh by category"
          description="From farm to your kitchen — explore our handpicked collections."
          link={{ href: "/shop", label: "View all" }}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((c) => (
            <CategoryIcon
              key={c.id}
              icon={c.icon}
              name={c.name}
              slug={c.slug}
              count={getProductsByCategory(c.slug).length}
            />
          ))}
        </div>
      </section>

      <OfferBanners />

      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="Most loved"
          title="Best sellers this week"
          description="The favourites flying off our shelves."
          link={{ href: "/shop", label: "Shop all" }}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <PromoCards />

      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <SectionHeading
          eyebrow="Hot deals"
          title="Seasonal picks at top discounts"
          description="Limited-time offers on our freshest seasonal produce."
          link={{ href: "/shop", label: "See all deals" }}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {seasonalPicks.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
