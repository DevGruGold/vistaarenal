
import { Link } from "react-router-dom";

interface NavigationProps {
  isMenuOpen: boolean;
}

export const Navigation = ({ isMenuOpen }: NavigationProps) => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-40 shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Vista Arenal</span>
              <span className="text-sm font-semibold text-green-600">$500,000 USD</span>
            </Link>
          </div>
          
          <div className={`
            md:flex items-center space-x-8
            ${isMenuOpen 
              ? 'flex flex-col fixed top-20 right-0 bg-white/98 backdrop-blur-md p-8 space-y-6 shadow-2xl w-80 border-l border-gray-200 space-x-0 min-h-[calc(100vh-5rem)]' 
              : 'hidden'
            }
          `}>
            <Link 
              to="/" 
              className="nav-link text-lg font-medium hover:text-primary transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className="nav-link text-lg font-medium hover:text-primary transition-colors duration-300 relative group"
            >
              Property Overview
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/services" 
              className="nav-link text-lg font-medium hover:text-primary transition-colors duration-300 relative group"
            >
              Features & Units
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
