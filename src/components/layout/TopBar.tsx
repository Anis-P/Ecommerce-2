import { Phone, MapPin, Truck } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-xs">
      <div className="container mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} /> Delivering across Mumbai
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={12} /> +91 98203 45678
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck size={12} />
          <span>Free delivery on orders above ₹499</span>
        </div>
      </div>
    </div>
  );
}
