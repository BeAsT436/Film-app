import {MovieItem} from "../index"
import styles from '../MovieList/MovieList.module.css';

const MovieList = ({movies}) => {
    console.log("movie list",movies);
  return (
    <ul className={styles.container}>
        {movies.length === 0 ? (
          <h2>no movies</h2>
        ) : (
          movies?.map((movie) => <MovieItem movie={movie} key={movie.imdbID} />)
        )}
    </ul>
  )
}
export default MovieList