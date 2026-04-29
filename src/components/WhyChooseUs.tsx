import { Truck, ShieldCheck, Leaf, Headset } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Certified organic produce from trusted Indian farms.",
  },
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Order before noon and we deliver the same day in Mumbai.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Not happy with an item? We replace or refund — no questions.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Our customer team is always one call or chat away.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-card-border"
              data-testid={`card-feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{f.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
