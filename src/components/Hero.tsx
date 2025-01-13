import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
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
    <div className="relative h-screen">
      {images.map((src, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Costa Rica landscape ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Capture the Beauty of Costa Rica
            </h1>
            <p className="text-xl mb-8 animate-fade-in">
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