import { useContext } from 'react'
import { MovieList } from '../components'
import { GlobalContext } from '../context/GlobalState'

const WatchList = () => {
  const { watchList } = useContext(GlobalContext)
  return (
    <>
      {watchList.length > 0 ? (
        <MovieList movies={watchList} type={'watchList'} />
      ) : (
        <p>add movie to watchList</p>
      )}
    </>
  )
}
export default WatchList
