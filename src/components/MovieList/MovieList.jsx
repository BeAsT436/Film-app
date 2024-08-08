import { MovieItem } from '../index'
import styles from '../MovieList/MovieList.module.css'
import Paginator from '../Paginator/Paginator'

const MovieList = ({ movies, currentPage, totalPages, handlePageChange, type }) => {
  return (
    <>
    <ul className={styles.container}>
      {movies.length === 0 ? (
        <h2>no movies</h2>
      ) : (
        movies?.map(movie => <MovieItem movie={movie} key={movie.imdbID} type={type} />)
      )}
    </ul>
    <Paginator currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
    </>
    
    
  )
}
export default MovieList
