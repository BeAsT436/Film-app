import styles from './MovieItem.module.css'
import { Link } from 'react-router-dom'
import defaultPosterUrl from '../../assets/images/no-poster.png'
const MovieItem = ({movie}) => {
  const {Poster, Title, Year, imdbID} = movie
  const posterUrl = Poster !== 'N/A' && Poster ? Poster : defaultPosterUrl
  return (
    <li className={styles.list}>
      <img className={styles.img} src={posterUrl} alt="" />
      <div className={styles.info}>
        <Link to={`/movie/${imdbID}`}>
          <h3 className={styles.title}>{Title}</h3>
        </Link>

        <h4 className={styles.year}>{Year}</h4>
      </div>
    </li>
  )
}

export default MovieItem
