import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { RatingStars } from "./RatingStars";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <SectionHeading
        eyebrow="Loved by India"
        title="What our customers say"
        description="Real reviews from real households across the country."
        align="center"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="relative bg-card rounded-2xl border border-card-border p-6 flex flex-col gap-4"
            data-testid={`card-testimonial-${t.id}`}
          >
            <Quote className="absolute top-5 right-5 text-primary/15" size={36} />
            <RatingStars rating={t.rating} />
            <p className="text-sm text-foreground leading-relaxed flex-1">"{t.comment}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
