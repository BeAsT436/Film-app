// import style from "./Controls.module.css"

import { useContext } from 'react'
import Button from '../common/Button/Button'
import { GlobalContext } from '../../context/GlobalState'

export const Controls = ({ type, movie, isWatchList, isWatched }) => {
  const {
    addMovieWatchList,
    addToWatched,
    removeMovieFromWatchList,
    removeFromWatched,
  } = useContext(GlobalContext)
  const NewFilm = () => {
    if (!isWatchList && !isWatched) {
      return (
        <>
          <Button onClick={() => addToWatched(movie)}>Add to Watched</Button>
          <Button onClick={() => addMovieWatchList(movie)}>
            Add to WatchList
          </Button>
        </>
      )
    } else if (isWatchList) {
      return (
        <>
          <Button onClick={() => addToWatched(movie)}>Add to Watched</Button>
          <Button onClick={() => removeMovieFromWatchList(movie.imdbID)}>
            remove from WatchList
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button onClick={() => removeFromWatched(movie.imdbID)}>
            remove from Watched
          </Button>
          <Button onClick={() => addMovieWatchList(movie)}>
            Add to WatchList
          </Button>
        </>
      )
    }
  }
  return (
    <div>
      {type === 'home' && <NewFilm />}
      {type === 'watchList' && (
        <>
          <Button onClick={() => addToWatched(movie)}>Add to Watched</Button>
          <Button onClick={() => removeMovieFromWatchList(movie.imdbID)}>
            remove from WatchList
          </Button>
        </>
      )}
      {type === 'watched' && (
        <>
          <Button onClick={() => removeFromWatched(movie.imdbID)}>
            remove from Watched
          </Button>
          <Button onClick={() => addMovieWatchList(movie)}>
            Add to WatchList
          </Button>
        </>
      )}
    </div>
  )
}
