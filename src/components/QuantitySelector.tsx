import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
  testIdPrefix?: string;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  testIdPrefix = "qty",
}: QuantitySelectorProps) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  const sizes =
    size === "sm"
      ? "h-8 [&>button]:w-8 [&>button]:h-8 [&>div]:w-8 text-sm"
      : "h-10 [&>button]:w-10 [&>button]:h-10 [&>div]:w-12 text-base";

  return (
    <div className={`inline-flex items-center rounded-full border border-border bg-card overflow-hidden ${sizes}`}>
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        className="flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        data-testid={`button-${testIdPrefix}-decrement`}
      >
        <Minus size={size === "sm" ? 12 : 14} />
      </button>
      <div className="flex items-center justify-center font-semibold tabular-nums" data-testid={`text-${testIdPrefix}-value`}>
        {value}
      </div>
      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        className="flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        data-testid={`button-${testIdPrefix}-increment`}
      >
        <Plus size={size === "sm" ? 12 : 14} />
      </button>
    </div>
  );
}
