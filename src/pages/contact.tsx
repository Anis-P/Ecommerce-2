import { useState, FormEvent } from "react";
import { Link } from "wouter";
import { ChevronRight, MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    try {
      const inquiries = JSON.parse(localStorage.getItem("glossary_inquiries") || "[]");
      inquiries.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("glossary_inquiries", JSON.stringify(inquiries));
    } catch {}
    setSent(true);
    toast({ title: "Message sent", description: "We will get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
          <Link href="/"><span className="hover:text-foreground cursor-pointer">Home</span></Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">Contact</span>
        </nav>

        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Talk to us</span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">We'd love to hear from you</h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Have a question about an order, a partnership idea, or just want to say hi? Our team in Bandra is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="space-y-4">
            <ContactInfo icon={MapPin} title="Visit our store" lines={["14 Linking Road, Bandra West", "Mumbai 400050, Maharashtra, India"]} />
            <ContactInfo icon={Phone} title="Call us" lines={["+91 98203 45678", "Mon – Sat: 8:00 AM – 9:00 PM"]} href="tel:+919820345678" />
            <ContactInfo icon={Mail} title="Email" lines={["info@glossary.in", "support@glossary.in"]} href="mailto:info@glossary.in" />
            <ContactInfo icon={Clock} title="Customer support hours" lines={["Monday – Saturday: 8 AM – 10 PM", "Sunday: 9 AM – 6 PM"]} />
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-card-border rounded-3xl p-6 md:p-8 space-y-4" data-testid="form-contact">
            <h2 className="font-serif text-2xl font-semibold mb-2">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" required>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Aanya Singh" data-testid="input-contact-name" />
              </Field>
              <Field label="Email address" required>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="aanya@example.com" data-testid="input-contact-email" />
              </Field>
            </div>
            <Field label="Subject">
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls} placeholder="How can we help?" data-testid="input-contact-subject" />
            </Field>
            <Field label="Your message" required>
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} placeholder="Tell us a bit more..." data-testid="input-contact-message" />
            </Field>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover-elevate active-elevate-2" data-testid="button-contact-submit">
              {sent ? "Message sent" : <>Send Message <Send size={14} /></>}
            </button>
            <p className="text-xs text-center text-muted-foreground">Your inquiry is saved locally for our reference.</p>
          </form>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-16">
        <div className="rounded-3xl overflow-hidden border border-card-border bg-card aspect-[16/9] md:aspect-[21/9]">
          <iframe
            title="Glossary store location"
            src="https://maps.google.com/maps?q=Linking%20Road%20Bandra%20West%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="iframe-map"
          />
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground mb-1.5 block">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactInfo({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 bg-card border border-card-border rounded-2xl p-5 hover-elevate active-elevate-2" data-testid={`card-contact-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="font-serif text-base font-semibold mb-1">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground leading-snug">{l}</p>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
