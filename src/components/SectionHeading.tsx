import { Link } from "wouter";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  link?: { href: string; label: string };
}

export function SectionHeading({ eyebrow, title, description, align = "left", link }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10 ${isCenter ? "text-center md:text-center" : ""}`}>
      <div className={isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-3 text-base md:text-lg leading-relaxed">{description}</p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover-elevate active-elevate-2 px-3 py-1.5 rounded-full"
          data-testid={`link-section-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {link.label} →
        </Link>
      )}
    </div>
  );
}
