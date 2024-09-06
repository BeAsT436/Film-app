import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieList } from '../components'

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <>
      {watched.length > 0 ? (
        <MovieList movies={watched} type={'watched'} />
      ) : (
        <p>add movie to watched</p>
      )}
    </>
  )
}
export default Watched
