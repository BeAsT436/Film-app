import { useContext, useState } from "react";
import { MovieList } from "../components";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { getMovies, searched } = useContext(GlobalContext);
  function handleOnClick(params) {
    getMovies();
  }
  return (
    <>
    <Search/>
    <div>
      <h2>Popular films</h2>
      <button onClick={handleOnClick}>123</button>
      <MovieList movies={searched.movies} />
    </div>
    </>
    
  );
};
export default Home;
