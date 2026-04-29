import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistContextType {
  items: string[];
  toggleItem: (id: string) => void;
  hasItem: (id: string) => boolean;
  count: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("glossary_wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("glossary_wishlist", JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems((current) =>
      current.includes(id)
        ? current.filter((i) => i !== id)
        : [...current, id]
    );
  };

  const hasItem = (id: string) => items.includes(id);

  return (
    <WishlistContext.Provider
      value={{ items, toggleItem, hasItem, count: items.length }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}