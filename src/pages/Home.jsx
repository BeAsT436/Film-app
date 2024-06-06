import { useContext, memo } from 'react'
import { MovieList } from '../components'
import { GlobalContext } from '../context/GlobalState'
import { Search } from '../components/Search/Search'
import Loader from '../components/Loader/Loader'
import { Error } from '../components/Error/Error'

const Home = () => {
  const { getMovies, searched } = useContext(GlobalContext)
  const handleSearchClick = async (searchTerm, searchType) => {
    await getMovies(searchTerm)
  }

  if (searched.isLoading) return <Loader />
  if (searched.error) return <Error error={searched.error} />
  return (
    <>
      <Search handleSearchClick={handleSearchClick} />
      {searched.movies.length ? (
        <MemorizedMovieList
          movies={searched.movies}
          currentPage={searched.currentPage}
          totalPages={searched.totalPages}
        />
      ) : (
        <div>start searching</div>
      )}
    </>
  )
}
const MemorizedMovieList = memo(MovieList)
export default Home
