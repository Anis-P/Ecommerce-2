import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  reviewCount?: number;
}

export function RatingStars({ rating, size = 14, showValue = false, reviewCount }: RatingStarsProps) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full || (i === full && half);
          return (
            <Star
              key={i}
              size={size}
              className={filled ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-xs font-medium text-muted-foreground">
          {rating.toFixed(1)}
          {typeof reviewCount === "number" && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
}
