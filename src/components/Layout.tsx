
import { useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Menu, X } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>
      <Navigation isMenuOpen={isMenuOpen} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
