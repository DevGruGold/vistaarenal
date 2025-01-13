import { useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Menu, X } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full bg-white/90 shadow-md"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>
      <Navigation isMenuOpen={isMenuOpen} />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};