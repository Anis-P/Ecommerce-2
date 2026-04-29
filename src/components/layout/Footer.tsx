import { Link } from "wouter";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-4" data-testid="link-footer-logo">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <Leaf size={20} />
                </div>
                <span className="font-serif text-2xl font-bold text-background tracking-tight">Glossary</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-6 max-w-sm">
              India's most loved organic grocery store — bringing fresh produce, dairy and pantry essentials to your doorstep daily.
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover-elevate active-elevate-2 flex items-center justify-center" aria-label="Facebook" data-testid="link-social-facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover-elevate active-elevate-2 flex items-center justify-center" aria-label="Instagram" data-testid="link-social-instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover-elevate active-elevate-2 flex items-center justify-center" aria-label="Twitter" data-testid="link-social-twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover-elevate active-elevate-2 flex items-center justify-center" aria-label="YouTube" data-testid="link-social-youtube">
                <Youtube size={16} />
              </a>
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Source code download will be enabled after publishing the project."); }}
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-full hover-elevate active-elevate-2 text-sm"
              data-testid="link-download-source"
            >
              <Download size={14} /> Download Source
            </a>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              <li><Link href="/shop?category=vegetables"><span className="hover:text-background cursor-pointer">Vegetables</span></Link></li>
              <li><Link href="/shop?category=fruits"><span className="hover:text-background cursor-pointer">Fruits</span></Link></li>
              <li><Link href="/shop?category=dairy"><span className="hover:text-background cursor-pointer">Dairy</span></Link></li>
              <li><Link href="/shop?category=meat-seafood"><span className="hover:text-background cursor-pointer">Meat & Seafood</span></Link></li>
              <li><Link href="/shop?category=daily-essentials"><span className="hover:text-background cursor-pointer">Daily Essentials</span></Link></li>
              <li><Link href="/shop?category=bakery"><span className="hover:text-background cursor-pointer">Bakery</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              <li><Link href="/about"><span className="hover:text-background cursor-pointer">About Us</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-background cursor-pointer">Contact</span></Link></li>
              <li><a href="#" className="hover:text-background">Careers</a></li>
              <li><a href="#" className="hover:text-background">Press</a></li>
              <li><a href="#" className="hover:text-background">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>14 Linking Road, Bandra West, Mumbai 400050, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <a href="tel:+919820345678" className="hover:text-background">+91 98203 45678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                <a href="mailto:info@glossary.in" className="hover:text-background">info@glossary.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Glossary. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="#"
              className="text-background font-semibold hover:text-primary transition-colors"
              data-testid="link-besto-credit"
            >
              Besto Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
