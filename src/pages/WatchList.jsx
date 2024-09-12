import { useCallback, useContext, useMemo, useState } from 'react'
import { MovieList } from '../components'
import { GlobalContext } from '../context/GlobalState'

const ITEMS_PER_PAGE = 10

const WatchList = () => {
  const { watchList } = useContext(GlobalContext)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = useCallback(page => {
    setCurrentPage(page)
  }, [])

  const totalPages = Math.ceil(watchList.length / ITEMS_PER_PAGE)

  const currentMovies = useMemo(() => {
    const indexOfLastMovie = currentPage * ITEMS_PER_PAGE
    const indexOfFirstMovie = indexOfLastMovie - ITEMS_PER_PAGE
    return watchList.slice(indexOfFirstMovie, indexOfLastMovie)
  }, [watchList, currentPage])
  return (
    <>
      {watchList.length > 0 ? (
        <MovieList type={'watchList'} movies={currentMovies}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}/>
      ) : (
        <p>add movie to watchList</p>
      )}
    </>
  )
}
export default WatchList
