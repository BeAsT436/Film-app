import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { MovieItem } from '../components'

const Favorites = () => {
  const { favorites } = useContext(GlobalContext)

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      <ul className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map(movie => <MovieItem key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No favorites yet!</p>
        )}
      </ul>
    </div>
  )
}

export default Favorites