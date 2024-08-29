import { MovieItem } from '../index'
import styles from '../MovieList/MovieList.module.css'
import Paginator from '../Paginator/Paginator'
import PropTypes from 'prop-types'

const MovieList = ({
  movies,
  currentPage,
  totalPages,
  handlePageChange,
  type,
  totalMovies,
}) => {
  return (
    <>
      <h2 className={styles.totalFilms}>Founded: {totalMovies} matches</h2>
      <ul className={styles.container}>
        {movies.length === 0 ? (
          <h2>no movies</h2>
        ) : (
          movies?.map(movie => (
            <MovieItem movie={movie} key={movie.imdbID} type={type} />
          ))
        )}
      </ul>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  )
}
export default MovieList

MovieList.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      title: PropTypes.string,
      year: PropTypes.string,
      poster: PropTypes.string,
    }),
  ),
}
