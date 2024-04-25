import { MovieDetails, Poster } from "../components";
import { Title } from "../components/common";
import { movie } from "../data";
import MovieDetailsLayout from "../components/layouts/MovieDetailsLayout/MovieDetailsLayout";
import { useNavigate } from "react-router-dom";

const MovieInfoPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  return (
    <>
      <Title title={movie.Title} />
      <MovieDetailsLayout>
        <Poster movie={movie} />
        <MovieDetails movie={movie} />
      </MovieDetailsLayout>
      <button
        style={{ width: "100px", height: "75px" }}
        onClick={handleBackClick}
      >
        back
      </button>
    </>
  );
};
export default MovieInfoPage;
