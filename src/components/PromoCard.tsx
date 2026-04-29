import { Link } from "wouter";
import promoVeg from "@assets/generated_images/promo_veg.png";
import promoMeat from "@assets/generated_images/promo_meat.png";

export function PromoCards() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-10 md:py-14">
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <Link href="/shop?category=vegetables">
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer h-72 md:h-80" data-testid="card-promo-veg">
            <img src={promoVeg} alt="Fresh vegetables" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-80">From the farm</span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight mb-2">
                Fresh vegetables, <span className="italic">handpicked daily</span>
              </h3>
              <p className="text-sm opacity-90 max-w-md">Sourced from organic farms across Maharashtra.</p>
            </div>
          </div>
        </Link>
        <Link href="/shop?category=meat-seafood">
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer h-72 md:h-80" data-testid="card-promo-meat">
            <img src={promoMeat} alt="Premium meat and seafood" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Premium cuts</span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight mb-2">
                Meat & seafood, <span className="italic">cleaned and ready</span>
              </h3>
              <p className="text-sm opacity-90 max-w-md">Hygienically packed and cold-chain delivered.</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
