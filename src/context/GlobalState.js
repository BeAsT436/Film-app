import { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'
import movieServiceInstance from '../services/movie'

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  watchList: JSON.parse(localStorage.getItem('watchList')) || [],
  watched: JSON.parse(localStorage.getItem('watched')) || [],
  searched: {
    movies: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    currentPage: 1,
    totalResults: 0,
    searchTerm: '',
    type: '',
  },
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
    localStorage.setItem('watchList', JSON.stringify(state.watchList))
    localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  const getMovies = async (searchTerm = 'shark', type, page = 1) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const { Search, totalResults } =
        await movieServiceInstance.fetchMoviesBySearchTerm(
          searchTerm,
          type,
          page,
        )
      dispatch({
        type: 'SET_FILMS',
        payload: { Search, totalResults, searchTerm, type, page },
      })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const addFavorite = movie =>
    dispatch({ type: 'ADD_FAVORITE', payload: movie })

  const removeFavorite = movieId => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: movieId })

    const updatedFavorites = state.favorites.filter(
      movie => movie.imdbID !== movieId,
    )
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const setCurrentPage = newPage => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage })
    getMovies(state.searched.searchTerm, state.searched.type, newPage)
  }

  const addMovieWatchList = movie =>
    dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })

  const removeMovieFromWatchList = movieId =>
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movieId })

  const addToWatched = movie =>
    dispatch({ type: 'ADD_TO_WATCHED', payload: movie })

  const removeFromWatched = movieId =>
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movieId })

  return (
    <GlobalContext.Provider
      value={{
        searched: state.searched,
        favorites: state.favorites,
        watchList: state.watchList,
        watched: state.watched,
        getMovies,
        setCurrentPage,
        removeFavorite,
        addFavorite,
        addMovieWatchList,
        removeMovieFromWatchList,
        addToWatched,
        removeFromWatched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
