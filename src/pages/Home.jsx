import { useContext, useState } from "react";
import fetchData from "../services/movie";
import { MovieList } from "../components";
import {GlobalContext} from "../context/GlobalState"

const Home = () => {
  // const [movies, setMovies] = useState([]);
  // const getData = async () => {
  //   const { Search } = await fetchData("home");
  //   setMovies(Search);
  // };
  const {getMovies,searched} = useContext(GlobalContext)
  function handleOnClick(params) {
    getMovies()
  }
  return (
    <div>
      <h2>Popular films</h2>
      <button onClick={handleOnClick}>123</button>
      <MovieList movies={searched.movies} />
    </div>
  );
};
export default Home;
