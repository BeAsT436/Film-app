import { useCallback, useContext, useMemo, useState } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { MovieList } from '../components'


const ITEMS_PER_PAGE = 10

const Favorites = () => {
  const { favorites } = useContext(GlobalContext)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = useCallback(page => {
    setCurrentPage(page)
  }, [])

  const totalPages = Math.ceil(favorites.length / ITEMS_PER_PAGE)

  const currentMovies = useMemo(() => {
    const indexOfLastMovie = currentPage * ITEMS_PER_PAGE
    const indexOfFirstMovie = indexOfLastMovie - ITEMS_PER_PAGE
    return favorites.slice(indexOfFirstMovie, indexOfLastMovie)
  }, [favorites, currentPage])

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>favorites is empty</p>
      ) : (
        <MovieList
          movies={currentMovies}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          type="home"
        />
      )}
    </div>
  )
}

export default Favorites
