import { Poster } from "../components";
import { movie } from "../data";


const MovieInfoPage = () => {
  return <div>
    <h1>{movie.Title}</h1>
    <div className="content">
      <Poster movie={movie} />
      <div>
        <p>Year: {movie.Year}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Released: {movie.Released}</p>
        <p>Country: {movie.Country}</p>
        <p>Language: {movie.Language}</p>
      </div>
    </div>
  </div>


}
export default MovieInfoPage