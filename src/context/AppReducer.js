const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        searched: {
          ...state.searched,
          isLoading: action.payload,
        },
      }
    case 'SET_FILMS':
      return {
        ...state,
        searched: {
          ...state.searched,
          movies: action.payload.Search,
          currentPage: action.payload.page,
          searchTerm: action.payload.searchTerm,
          type: action.payload.type,
          totalResults: action.payload.totalResults,
          totalPages: Math.ceil(action.payload.totalResults / 10),
        },
      }
    case 'SET_ERROR':
      return {
        ...state,
        searched: {
          ...state.searched,
          error: action.payload,
        },
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        searched: {
          ...state.searched,
          currentPage: action.payload,
        },
      }
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.imdbID !== action.payload,
        ),
      }
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      }
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchList: state.watchList.filter(
          movie => movie.imdbID !== action.payload,
        ),
      }
    case 'ADD_TO_WATCHED':
      return {
        ...state,
        watched: [...state.watched, action.payload],
        watchList: state.watchList.filter(
          movie => movie.imdbID !== action.payload.imdbID,
        ),
      }
    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter(movie => movie.imdbID !== action.payload),
      }
    default:
      return state
  }
}
export default AppReducer
