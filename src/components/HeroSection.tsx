import { Link } from "wouter";
import { ArrowRight, Truck, Leaf as LeafIcon, Star } from "lucide-react";
import heroImage from "@assets/generated_images/hero_basket.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="container relative mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              <LeafIcon size={14} /> 100% Organic & Natural
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
              Fresh groceries,
              <br />
              <span className="italic text-primary">delivered daily</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Hand-picked vegetables, dairy, pantry staples and more — sourced directly from Indian farms and delivered fresh to your doorstep across Mumbai.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop">
                <button
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2"
                  data-testid="button-hero-shop-now"
                >
                  Shop Now <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="inline-flex items-center gap-2 bg-card border border-border text-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2"
                  data-testid="button-hero-learn-more"
                >
                  Our Story
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Truck size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">Orders above ₹499</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">4.8 / 5 Rating</p>
                  <p className="text-xs text-muted-foreground">10,000+ happy customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-3" />
            <div className="absolute inset-0 bg-secondary/10 rounded-[2.5rem] -rotate-3" />
            <div className="relative aspect-square bg-card rounded-[2.5rem] overflow-hidden border border-card-border shadow-2xl">
              <img src={heroImage} alt="Fresh organic groceries" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card rounded-2xl border border-card-border shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
                <span className="text-secondary font-bold">%</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Today's offer</p>
                <p className="text-sm font-bold text-foreground">Up to 30% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
