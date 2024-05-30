import styles from './MovieItem.module.css'
import { Link } from 'react-router-dom'
const MovieItem = props => {
  return (
    <li className={styles.list}>
      <img className={styles.img} src={props.movie.Poster} alt="" />
      <div className={styles.info}>
        <Link to={`/movie/${props.movie.imdbID}`}>
          <h3 className={styles.title}>{props.movie.Title}</h3>
        </Link>

        <h4 className={styles.year}>{props.movie.Year}</h4>
      </div>
    </li>
  )
}

export default MovieItem
