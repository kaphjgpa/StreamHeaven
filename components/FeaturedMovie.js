import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

const FeaturedMovie = () => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] w-full">
      <Image
        src="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
        alt="Oppenheimer"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-8 max-w-xl md:max-w-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-white">
          Oppenheimer
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-white">
          The story of American scientist J. Robert Oppenheimer and his role in
          the development of the atomic bomb.
        </p>
        <div className="flex space-x-4">
          <Button size="sm" className="md:text-base md:py-2 md:px-4">
            <Play className="mr-2 h-4 w-4" /> Play
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="md:text-base md:py-2 md:px-4"
          >
            <Info className="mr-2 h-4 w-4" /> More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
