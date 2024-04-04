import { MovieDetails, Poster } from "../components";
import { Title } from "../components/common";
import { movie } from "../data";
import  MovieDetailsLayout  from "../components/layouts/MovieDetailsLayout/MovieDetailsLayout";

const MovieInfoPage = () => {
  return (
    <>
      <Title title={movie.Title} />
      <MovieDetailsLayout>
        <Poster movie={movie} />
        <MovieDetails movie={movie} />
      </MovieDetailsLayout>
    </>
  );
};
export default MovieInfoPage;
