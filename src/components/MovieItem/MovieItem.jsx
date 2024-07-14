import styles from './MovieItem.module.css'
import { Link } from 'react-router-dom'
import defaultPosterUrl from '../../assets/images/no-poster.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalState'
import { useContext } from 'react'
import Button from '../common/Button/Button'

const MovieItem = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite, watchList, addMovieWatchList, removeMovieFromWatchList, watched, addToWatched, removeFromWatched } =
    useContext(GlobalContext)
  const { Poster, Title, Year, imdbID } = movie
  const posterUrl = Poster !== 'N/A' && Poster ? Poster : defaultPosterUrl
  const isFavorite = favorites.some(fav => fav.imdbID === imdbID)
  const isWatchList = watchList.some(film => film.imdbID === imdbID)
  const isWatched = watched.some(film => film.imdbID === imdbID)

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(imdbID)
    } else {
      addFavorite(movie)
    }
  }
  const handleWatchListClick = () => {
    if (isWatchList) {
      removeMovieFromWatchList(imdbID)
    } else {
      addMovieWatchList(movie)
    }
  }
  const handleWatchedClick = () => {
    if (isWatched) {
      removeFromWatched(imdbID)
    } else {
      addToWatched(movie)
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
          <FontAwesomeIcon
            icon={faHeart}
            color={isFavorite ? 'red' : 'black'}
          />
        </button>
        {/* {!isWatched? */}
        <Button onClick={handleWatchListClick}>{isWatchList ? "remove from watchList":"Add to Watchlist"}</Button>
        {/* : */}
        <Button onClick={handleWatchedClick}>{isWatched ? "remove from watched":"Add to Watched"}</Button>
                  {/* } */}
      </div>
    </li>
  )
}

export default MovieItem
