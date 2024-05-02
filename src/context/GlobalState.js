import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import fetchData from "../services/movie";
import movieServiceInstance from "../services/movie";
const initialState = {
  searched: {
    movies: [],
    isLoading: false,
    error: null,
  },
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getMovies = async (searchTerm, type, page) => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      const { Search } = await movieServiceInstance.fetchMoviesBySearchTerm(
        searchTerm,
        type,
        page
      );
      dispatch({
        type: "SET_FILMS",
        payload: { Search },
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        searched: state.searched,
        getMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
