/* eslint-disable no-empty-function */
import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { MovieList } from '../components'


const Favorites = () => {
  const { favorites } = useContext(GlobalContext)

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      {/* <ul className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map(movie => <MovieItem key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No favorites yet!</p>
        )}
      </ul> */}
      {/* // eslint-disable-next-line react/jsx-no-bind, react/jsx-no-bind, no-empty-function */}
      <MovieList movies={favorites} currentPage={1} totalPages={Math.floor(favorites.length/10)} handlePageChange={()=>{}} type=""/>
    </div>
  )
}

export default Favorites