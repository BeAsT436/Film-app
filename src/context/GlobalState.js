import {createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
const initialState = {
    searched:{
        movies:[],
        isLoading:false,
        error:null
    }
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const getMovies = ()=>{
        try {
            dispatch({
                
            })
        } catch (error) {
            
        }
    }
    return(
        <GlobalContext.Provider value={{
            searched:state.searched
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
