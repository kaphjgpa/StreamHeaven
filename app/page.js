import FeaturedMovie from "@/components/FeaturedMovie";
import MovieList from "@/components/MovieList";

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 5,
    title: "Forrest Gump",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    id: 6,
    title: "The Matrix",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 7,
    title: "Goodfellas",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    id: 8,
    title: "The Silence of the Lambs",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
  },
  {
    id: 9,
    title: "Schindler's List",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
  },
  {
    id: 11,
    title: "Fight Club",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    id: 12,
    title: "The Godfather",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 13,
    title: "Interstellar",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 14,
    title: "The Green Mile",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
  },
  {
    id: 15,
    title: "Gladiator",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 16,
    title: "The Departed",
    posterUrl: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
  },
];

export default function Home() {
  return (
    <>
      <FeaturedMovie />
      <div className="w-full">
        <MovieList title="Trending Now" movies={dummyMovies} />
        <MovieList title="New Releases" movies={dummyMovies} />
        <MovieList title="Top Rated" movies={dummyMovies} />
        <MovieList title="Trending Now" movies={dummyMovies} />
        <MovieList title="New Releases" movies={dummyMovies} />
        <MovieList title="Top Rated" movies={dummyMovies} />
      </div>
    </>
  );
}
