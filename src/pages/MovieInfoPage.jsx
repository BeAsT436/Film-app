import { MovieDetails, Poster } from '../components'
import { Title } from '../components/common'
import MovieDetailsLayout from '../components/layouts/MovieDetailsLayout/MovieDetailsLayout'
import { useNavigate, useParams } from 'react-router-dom'
import movieServiceInstance from '../services/movie'
import { useEffect, useState } from 'react'
import Button from '../components/common/Button/Button'
import Loader from '../components/Loader/Loader'
import { Error } from '../components/Error/Error'

const MovieInfoPage = () => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ isError: false, message: '' })

  const navigate = useNavigate()
  const { id } = useParams()
  const getMovieDetails = async movieId => {
    setIsLoading(true)
    try {
      const data = await movieServiceInstance.fetchMovieById(movieId)
      setMovie(data)
    } catch (error) {
      setError({ isError: true, message: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovieDetails(id)
  }, [id])

  const handleBackClick = () => navigate(-1)

  const handleRefetchClick = () => {
    setError({ isError: false, message: '' })
    getMovieDetails(id)
  }

  if (isLoading) return <Loader />
  if (error.isError)
    return (
      <Error error={error.message} handleRefetchClick={handleRefetchClick} />
    )

  return (
    movie && (
      <>
        <Title title={movie.Title} />
        <MovieDetailsLayout>
          <Poster movie={movie} />
          <MovieDetails movie={movie} />
        </MovieDetailsLayout>
        <Button onClick={handleBackClick}>Back</Button>
      </>
    )
  )
}
export default MovieInfoPage
