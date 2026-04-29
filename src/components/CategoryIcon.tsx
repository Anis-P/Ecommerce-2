import { Link } from "wouter";
import {
  Leaf,
  Apple,
  Milk,
  Fish,
  Cookie,
  Coffee,
  Package,
  Croissant,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Apple,
  Milk,
  Fish,
  Cookie,
  Coffee,
  Package,
  Croissant,
};

interface CategoryIconProps {
  icon: string;
  name: string;
  slug: string;
  count?: number;
}

export function CategoryIcon({ icon, name, slug, count }: CategoryIconProps) {
  const Icon = iconMap[icon] ?? Package;
  return (
    <Link href={`/shop?category=${slug}`}>
      <div
        className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-card border border-card-border hover-elevate active-elevate-2 cursor-pointer h-full"
        data-testid={`card-category-${slug}`}
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Icon size={28} strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="font-serif font-semibold text-foreground">{name}</h3>
          {typeof count === "number" && (
            <p className="text-xs text-muted-foreground mt-0.5">{count} items</p>
          )}
        </div>
      </div>
    </Link>
  );
}
