const AppReducer = (state, action)=>{
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                searched:{
                    ...state.searched,
                    isLoading:action.payload
                }
            }
        case "SET_FILMS":
            return {
                ...state,
                searched:{
                    ...state.searched,
                    movies:action.payload.Search
                }
            }
        case "SET_ERROR":
            return{
                ...state,
                searched:{
                    ...state.searched,
                    error:action.payload
                }
            }
        default:
            return state
    }
}
export default AppReducer