import { Link } from "wouter";
import { ChevronRight, Leaf, Heart, Users, Award, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/hero_basket.png";
import team1 from "@assets/generated_images/team_1.png";
import team2 from "@assets/generated_images/team_2.png";
import team3 from "@assets/generated_images/team_3.png";
import team4 from "@assets/generated_images/team_4.png";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";

const values = [
  { icon: Leaf, title: "Always Fresh", description: "Sourced daily from farms within 100 km of our distribution centres." },
  { icon: Heart, title: "Honest Pricing", description: "No hidden fees, no inflated MRPs — just fair prices for fair produce." },
  { icon: Users, title: "Farmer First", description: "We pay farmers directly and 30% above mandi rates on average." },
  { icon: Sparkles, title: "Zero Waste", description: "Compostable packaging and a working donation programme for unsold stock." },
];

const team = [
  { img: team1, name: "Aarav Patel", role: "Co-founder & CEO" },
  { img: team2, name: "Diya Iyer", role: "Head of Operations" },
  { img: team3, name: "Rohan Verma", role: "Head of Sourcing" },
  { img: team4, name: "Meera Kapoor", role: "Customer Experience" },
];

export default function About() {
  return (
    <>
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
          <Link href="/"><span className="hover:text-foreground cursor-pointer">Home</span></Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">About Us</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our story</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">
              From a small Bandra <span className="italic text-primary">farm-stand</span> to your kitchen
            </h1>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Glossary started in 2021 as a humble vegetable cart on Linking Road. Aarav and Diya, two friends frustrated with the quality of supermarket produce, decided to bring farm-fresh vegetables straight from Nashik to their Bandra neighbours.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Five years on, we deliver to over 10,000 households across Mumbai every week, sourcing from a network of 200+ certified organic farmers across Maharashtra, Karnataka and Punjab. We have stayed true to our roots: fresh, fair and friendly.
            </p>
            <div className="flex gap-3 mt-6">
              <Link href="/shop"><button className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover-elevate active-elevate-2" data-testid="button-about-shop">Shop with us</button></Link>
              <Link href="/contact"><button className="bg-card border border-border text-foreground font-semibold px-6 py-3 rounded-full hover-elevate active-elevate-2" data-testid="button-about-contact">Get in touch</button></Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] -rotate-3" />
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-card-border shadow-xl">
              <img src={heroImage} alt="Glossary fresh basket" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/40 border-y border-border py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Stat value="10K+" label="Happy households" />
            <Stat value="200+" label="Partner farmers" />
            <Stat value="50+" label="Products daily" />
            <Stat value="4.8" label="Customer rating" icon />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">What we believe</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">Our values guide everything we do</h2>
          <p className="text-muted-foreground">Built on trust, transparency, and a love for fresh, honest food.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-card border border-card-border rounded-2xl p-6 text-center" data-testid={`card-value-${v.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">The people</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">Meet the team behind Glossary</h2>
          <p className="text-muted-foreground">A small but passionate team obsessed with quality, freshness, and you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div key={m.name} className="bg-card border border-card-border rounded-2xl overflow-hidden" data-testid={`card-team-${m.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="aspect-square bg-muted overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-base font-semibold">{m.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}

function Stat({ value, label, icon }: { value: string; label: string; icon?: boolean }) {
  return (
    <div>
      <p className="font-serif text-4xl md:text-5xl font-bold text-primary inline-flex items-center gap-1">
        {value}{icon && <Award size={28} className="text-secondary" />}
      </p>
      <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}
