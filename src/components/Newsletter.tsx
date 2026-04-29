import { useState, FormEvent } from "react";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({
      title: "Subscribed",
      description: `Thanks ${email}! Watch your inbox for our weekly fresh deals.`,
    });
    setEmail("");
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-14">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
              <Mail size={14} /> Newsletter
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-3">
              Get fresh deals in your inbox
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Subscribe for weekly seasonal recipes, exclusive offers, and ₹100 off your first order.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-testid="form-newsletter">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-5 py-3.5 outline-none focus:bg-white/15 focus:border-white/40"
              data-testid="input-newsletter-email"
            />
            <button
              type="submit"
              className="bg-secondary text-secondary-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2"
              data-testid="button-newsletter-subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
