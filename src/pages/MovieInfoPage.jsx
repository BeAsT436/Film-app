import { MovieDetails, Poster } from "../components";
import {Title} from "../components/common";
import { movie } from "../data";


const MovieInfoPage = () => {
  return <div>
    <Title title={movie.Title}/>
    <div className="content">
      <Poster movie={movie} />
      <MovieDetails movie={movie}/>
    </div>
  </div>


}
export default MovieInfoPage