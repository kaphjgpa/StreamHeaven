"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef(null);

  const handleScroll = useCallback((direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount =
      direction === "left" ? -container.offsetWidth : container.offsetWidth;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const checkArrows = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkArrows);
      window.addEventListener("resize", checkArrows);
      checkArrows();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkArrows);
      }
      window.removeEventListener("resize", checkArrows);
    };
  }, [checkArrows]);

  return (
    <div className="my-8 relative">
      <h2 className="text-2xl font-semibold mb-4 px-4">{title}</h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {showLeftArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background/80"
            onClick={() => handleScroll("left")}
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>
        )}
        {showRightArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background/80"
            onClick={() => handleScroll("right")}
          >
            <ChevronRight className="h-10 w-10" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
