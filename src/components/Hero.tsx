
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "/lovable-uploads/74c2dda1-b9dd-4976-b725-1cf4e8ab3c8e.png",
  "/lovable-uploads/e7b2b5dc-9bf5-4fe0-86d9-cc3e50b95e88.png",
  "/lovable-uploads/f9e39be2-8f34-47f4-ac5a-0b4b8e0db6a5.png"
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Vista Arenal property view ${index + 1}`}
            className="object-cover w-full h-full"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-4xl mt-20 md:mt-0">
            <div className="mb-4">
              <span className="inline-block bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Exclusive Lakefront Investment
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Vista Arenal
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-6 animate-fade-in">
              $500,000 USD
            </div>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-95 leading-relaxed max-w-3xl">
              Exceptional lakefront property with 4 rentable units in La Fortuna, Costa Rica. 
              Stunning Lake Arenal views, proven rental income, and endless possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 h-auto"
              >
                <a href="/contact">Schedule Viewing</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/25 text-lg px-8 py-4 h-auto"
              >
                <a href="/about">View Property Details</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
