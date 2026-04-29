import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { CategoryNav } from "./CategoryNav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Header />
      <CategoryNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
