// import style from "./Controls.module.css"

import { useContext } from 'react'
import Button from '../common/Button/Button'
import { GlobalContext } from '../../context/GlobalState'

export const Controls = ({ type, movie }) => {
  const {
    addMovieWatchList,
    addToWatched,
    removeMovieFromWatchList,
    removeFromWatched,
  } = useContext(GlobalContext)
  return (
    <div>
      {type === 'home' && (
        <>
          <Button onClick={() => addToWatched(movie)}>Add to Watched</Button>
          <Button onClick={() => addMovieWatchList(movie)}>
            Add to WatchList
          </Button>
        </>
      )}
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
          <Button onClick={() => removeFromWatched(movie.imdbID)}>remove from Watched</Button>
          <Button onClick={() => addMovieWatchList(movie)}>
            Add to WatchList
          </Button>
        </>
      )}
    </div>
  )
}
