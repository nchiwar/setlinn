"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";

import { Button } from "@components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import welcome from "@images/welcome.png";
import campus from "@images/campus_tour.png";
import resources2 from "@images/resources2.png";
import community from "@images/community-support.png";

const slidesData = [
  {
    id: 1,
    title: "Settle Smarter. Live Better",
    description:
      "From residence permits to student jobs, we simplify your move to Germany.",
    ctaText: "Get Started",
    image: welcome,
    align: "center",
  },
  {
    id: 2,
    title: "Campus Tour: See Yourself Here",
    description: "A vibrant community waiting for you. Get a sneak peek!",
    ctaText: "Explore Campus Tour",
    image: campus,
    align: "start",
  },
  {
    id: 3,
    title: "Exclusive Resources for Members",
    description: "Unlock premium content and tools for ultimate success.",
    ctaText: "View Resources",
    image: resources2,
    align: "end",
  },
  {
    id: 4,
    title: "Join the Waitlist Today",
    description:
      "Secure your spot and be the first to know about new programs.",
    ctaText: "Sign Up Free",
    image: community,
    align: "center",
  },
];

const SlideContent = ({ slide }) => {
  // Dynamically adjust text container alignment based on slide data
  let textAlignment;
  switch (slide.align) {
    case "start":
      textAlignment = "justify-center items-start text-left";
      break;
    case "end":
      textAlignment = "justify-center items-end text-right";
      break;
    case "center":
    default:
      textAlignment = "justify-center items-center text-center";
      break;
  }

  return (
    <div
      className="w-full h-full flex-shrink-0 relative"
      style={{
        backgroundImage: `url('${slide.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div
        className={`absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex p-8 ${textAlignment}`}
      >
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            {slide.title}
          </h1>
          <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
            {slide.description}
          </p>
          <Button
            variant="primary"
            className="px-8 py-3 h-auto text-lg font-bold bg-[#207681] cursor-pointer"
          >
            {slide.ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- CONTEXT & INDICATOR (Keeping indicator fix) ---

const CarouselContext = React.createContext({
  currentSlide: 0,
  handleDotClick: () => {},
});

const CarouselIndicator = ({ slides }) => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    return null;
  }

  const { currentSlide, handleDotClick } = context;

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "bg-white scale-110"
              : "bg-white/50 hover:bg-white/80"
          }`}
          onClick={() => handleDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// --- HERO COMPONENT ---

function Hero() {
  const [api, setApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = useCallback(
    (index) => {
      if (api && api.scrollTo) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const contextValue = {
    currentSlide,
    handleDotClick,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      {/* Set the container to relative and give it a max-width */}
      <div className="relative mx-auto">
        {/* Optional: max-w-7xl */}
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 4000, // Change 4000 to your desired time in milliseconds
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="h-[400px] sm:h-[500px] lg:h-[600px]">
            {slidesData.map((slide) => (
              <CarouselItem key={slide.id}>
                <SlideContent slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* IMPORTANT CHANGE: Override default positioning (e.g., -12 or -16) 
             to place the buttons inside the content area. */}
          <CarouselPrevious className="left-4 bg-white/30 text-white hover:bg-white/50 border-white/50" />
          <CarouselNext className="right-4 bg-white/30 text-white hover:bg-white/50 border-white/50" />

          {/* Indicator Dots using custom component */}
          <CarouselIndicator slides={slidesData} />
        </Carousel>
      </div>
    </CarouselContext.Provider>
  );
}

export default Hero;
