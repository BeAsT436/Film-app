import { useState } from "react";
import fetchData from "../services/movie";
import { MovieList } from "../components";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const { Search } = await fetchData("home");
    setMovies(Search);
  };
  function handleOnClick(params) {
    getData();
  }
  return (
    <div>
      <h2>Popular films</h2>
      <button onClick={handleOnClick}>123</button>
      <MovieList movies={movies} />
    </div>
  );
};
export default Home;
