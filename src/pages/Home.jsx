import { useContext, memo, useState, useEffect } from 'react'
import { MovieList } from '../components'
import { GlobalContext } from '../context/GlobalState'
import { Search } from '../components/Search/Search'
import Loader from '../components/Loader/Loader'
import ErrorModal from '../components/ErrorModal/ErrorModal'

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { getMovies, searched, setCurrentPage } = useContext(GlobalContext)
  
  useEffect(()=>{
    if (searched.error) {
      setErrorMessage(searched.error)
      setIsOpenModal(true)
    }
  },[searched.error])

  const handleSearchClick = async (searchTerm, searchType) => {
    try {
      await getMovies(searchTerm, searchType, 1)
    } catch (error) {
      console.log(error)
      handleError(error)
    }
  }
  const handleError = message => {
    setErrorMessage(message)
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setErrorMessage('')
    setIsOpenModal(false)
  }

  if (searched.isLoading) return <Loader />
  // if (searched.error) return <Error error={searched.error} />
  return (
    <>
      <ErrorModal
        message={errorMessage}
        onClose={handleCloseModal}
        isOpen={isOpenModal}
      />
      <Search handleSearchClick={handleSearchClick} />
      {searched.movies.length ? (
        <MemorizedMovieList
          movies={searched.movies}
          currentPage={searched.currentPage}
          totalPages={searched.totalPages}
          handlePageChange={setCurrentPage}
          type={"home"}
        />
      ) : (
        <div>start searching</div>
      )}
    </>
  )
}
const MemorizedMovieList = memo(MovieList)
export default Home
