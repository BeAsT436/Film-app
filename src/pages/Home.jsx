import { useContext, memo } from 'react'
import { MovieList } from '../components'
import { GlobalContext } from '../context/GlobalState'
import { Search } from '../components/Search/Search'

const Home = () => {
  const { getMovies, searched } = useContext(GlobalContext)
  function handleOnClick(params) {
    getMovies()
  }
  const handleSearchClick = async (searchTerm, searchType) => {
    await getMovies(searchTerm)
  }
  return (
    <>
      <Search handleSearchClick={handleSearchClick} />
      <div>
        <h2>Popular films</h2>
        <button onClick={handleOnClick}>123</button>
        <MemorizedMovieList movies={searched.movies} />
      </div>
    </>
  )
}
const MemorizedMovieList = memo(MovieList)
export default Home
