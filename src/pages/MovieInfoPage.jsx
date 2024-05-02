import { MovieDetails, Poster } from "../components";
import { Title } from "../components/common";
import MovieDetailsLayout from "../components/layouts/MovieDetailsLayout/MovieDetailsLayout";
import { useNavigate, useParams } from "react-router-dom";
import movieServiceInstance from "../services/movie";
import { useEffect, useState } from "react";

const MovieInfoPage = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleBackClick = () => navigate(-1);

  useEffect(() => {
    const getMovieDetailsById = async (movieId) => {
      const data = await movieServiceInstance.fetchMovieById(movieId);
      setMovie(data);
    };
    
    getMovieDetailsById(id);
  }, [id]);

  return (
    <>
      {movie ? (
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
      ) : (
        <div>loading</div>
      )}
    </>
  );
};
export default MovieInfoPage;
