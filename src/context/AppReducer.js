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
          totalPages: Math.ceil(action.payload.totalResults / 5),
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
      return{
        ...state,
        searched:{
          ...state.searched,
          currentPage: action.payload 
        }
      }
    default:
      return state
  }
}
export default AppReducer
