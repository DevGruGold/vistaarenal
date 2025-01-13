import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "/photo-1472396961693-142e6e269027",  // Costa Rican deer in rainforest
  "/photo-1501286353178-1ec881214838",  // Monkey in rainforest
  "/photo-1485833077593-4278bba3f11f"   // Deer near trees
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
    <div className="relative min-h-[100svh] md:h-screen w-full">
      {images.map((src, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Costa Rica wildlife ${index + 1}`}
            className="object-cover w-full h-full"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl mt-16 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
              Capture the Beauty of Costa Rica
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 animate-fade-in opacity-90">
              Join our photography tours and discover the perfect shots in paradise
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white animate-fade-in"
            >
              <a href="/contact">Book Your Tour</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};