
import { Link } from "react-router-dom";

interface NavigationProps {
  isMenuOpen: boolean;
}

export const Navigation = ({ isMenuOpen }: NavigationProps) => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Lake Arenal Paradise
            </Link>
          </div>
          <div className={`
            md:flex items-center space-x-8
            ${isMenuOpen ? 'flex flex-col absolute top-16 right-0 bg-white/90 backdrop-blur-sm p-4 space-y-4 shadow-lg w-48 space-x-0' : 'hidden'}
          `}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">Property Overview</Link>
            <Link to="/services" className="nav-link">Features & Units</Link>
            <Link to="/contact" className="nav-link">Inquire</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
