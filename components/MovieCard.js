import React from "react";
import Image from "next/image";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative w-[150px] h-[225px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[375px] flex-shrink-0 group">
      <div className="absolute inset-0 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:z-10">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-semibold">
              {movie.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
