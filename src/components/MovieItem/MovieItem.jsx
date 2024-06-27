import styles from './MovieItem.module.css'
import { Link } from 'react-router-dom'
import defaultPosterUrl from '../../assets/images/no-poster.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalState'
import { useContext } from 'react'

const MovieItem = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext)
  const { Poster, Title, Year, imdbID } = movie
  const posterUrl = Poster !== 'N/A' && Poster ? Poster : defaultPosterUrl
  const isFavorite = favorites.some(fav => fav.imdbID === imdbID)
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(imdbID)
    } else {
      addFavorite(movie)
    }
  }
  return (
    <li className={styles.list}>
      <img className={styles.img} src={posterUrl} alt="" />
      <div className={styles.info}>
        <Link to={`/movie/${imdbID}`}>
          <h3 className={styles.title}>{Title}</h3>
        </Link>

        <h4 className={styles.year}>{Year}</h4>
        <button className={styles.favoriteButton} onClick={handleFavoriteClick}>
          {' '}
          <FontAwesomeIcon
            icon={faHeart}
            color={isFavorite ? 'red' : 'black'}
          />
          {' '}
        </button>
      </div>
    </li>
  )
}

export default MovieItem
