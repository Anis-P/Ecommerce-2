import { Link } from "wouter";
import offerOrange from "@assets/generated_images/offer_orange.png";
import offerBlue from "@assets/generated_images/offer_blue.png";

export function OfferBanners() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-10 md:py-14">
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <Link href="/shop?category=fruits">
          <div className="relative overflow-hidden rounded-3xl bg-secondary/10 border border-secondary/20 p-7 md:p-9 flex items-center gap-5 hover-elevate active-elevate-2 cursor-pointer h-full" data-testid="card-offer-fruits">
            <div className="flex-1 z-10">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-2">
                Limited Offer
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-3">
                Seasonal fruits at <span className="italic">25% off</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Mango, watermelon, pineapple — direct from orchards.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                Shop fruits →
              </span>
            </div>
            <img src={offerOrange} alt="Seasonal fruits offer" className="w-32 md:w-40 h-32 md:h-40 object-cover rounded-2xl" />
          </div>
        </Link>

        <Link href="/shop?category=daily-essentials">
          <div className="relative overflow-hidden rounded-3xl bg-primary/10 border border-primary/20 p-7 md:p-9 flex items-center gap-5 hover-elevate active-elevate-2 cursor-pointer h-full" data-testid="card-offer-essentials">
            <div className="flex-1 z-10">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
                Pantry Restock
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-3">
                Daily essentials <span className="italic">starting ₹49</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Atta, dal, oils and spices — best prices guaranteed.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Shop essentials →
              </span>
            </div>
            <img src={offerBlue} alt="Pantry essentials offer" className="w-32 md:w-40 h-32 md:h-40 object-cover rounded-2xl" />
          </div>
        </Link>
      </div>
    </section>
  );
}
