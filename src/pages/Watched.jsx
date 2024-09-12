import { useCallback, useContext, useMemo, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieList } from '../components'

const ITEMS_PER_PAGE = 10

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = useCallback(page => {
    setCurrentPage(page)
  }, [])

  const totalPages = Math.ceil(watched.length / ITEMS_PER_PAGE)

  const currentMovies = useMemo(() => {
    const indexOfLastMovie = currentPage * ITEMS_PER_PAGE
    const indexOfFirstMovie = indexOfLastMovie - ITEMS_PER_PAGE
    return watched.slice(indexOfFirstMovie, indexOfLastMovie)
  }, [watched, currentPage])

  return (
    <>
      {watched.length > 0 ? (
        <MovieList movies={currentMovies} type={'watched'}
        currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange} />
      ) : (
        <p>add movie to watched</p>
      )}
    </>
  )
}
export default Watched
