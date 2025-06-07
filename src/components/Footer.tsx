
import { MessageCircle } from "lucide-react";

export const Footer = () => {
  const whatsappNumber = "+506 6237 3779";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lake Arenal Paradise</h3>
            <p className="text-gray-300">
              Premium lakefront investment property in La Fortuna, Costa Rica. 
              Four rental units with stunning views and proven income potential.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Property Info</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="footer-link">Property Overview</a></li>
              <li><a href="/services" className="footer-link">Features & Units</a></li>
              <li><a href="/contact" className="footer-link">Schedule Viewing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-green-400 transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{whatsappNumber}</span>
            </a>
            <p className="text-gray-300 mt-4 text-sm">
              Located in La Fortuna, Costa Rica<br />
              Lake Arenal, Arenal Volcano Region
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lake Arenal Paradise Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
