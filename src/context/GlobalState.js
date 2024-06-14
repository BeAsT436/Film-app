import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import movieServiceInstance from '../services/movie'
const initialState = {
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
  const setCurrentPage = (newPage)=>{
    dispatch({type:"SET_CURRENT_PAGE", payload:newPage})
    getMovies(state.searched.searchTerm, state.searched.type, newPage)
  }
  return (
    <GlobalContext.Provider
      value={{
        searched: state.searched,
        getMovies,
        setCurrentPage
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
