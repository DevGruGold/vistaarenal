
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "/photo-1506744038136-46273834b3fb",  // Lake surrounded by trees
  "/photo-1482938289607-e9573fc25ebb",  // River between mountains
  "/photo-1518495973542-4542c06a5843"   // Sunlight through forest
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
            alt={`Lake Arenal property view ${index + 1}`}
            className="object-cover w-full h-full"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl mt-16 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
              Paradise Investment on Lake Arenal
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 animate-fade-in opacity-90">
              Unique lakefront property with 4 rentable units in La Fortuna, Costa Rica. 
              Stunning views, proven rental income, and endless possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <a href="/contact">Schedule Viewing</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <a href="/about">View Property Details</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
