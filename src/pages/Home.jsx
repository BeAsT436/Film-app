import { useState } from "react";
import fetchData from "../services/movie"
import Film from "../components/Film/Film";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const { Search } = await fetchData("home");
    console.log(Search)
    setMovies(Search);
  };
  ;
  function handleOnClick(params) {
    getData();
  }
  return (
    <div>
      <h2>Popular films</h2>
      <button onClick={handleOnClick}>123</button>
      <ul>
        {movies.length === 0 ? (
          <h2>no movies</h2>
        ) : (
          movies?.map((movie) => <Film movie={movie} key={movie.imdbID} />)
        )}
      </ul>
    </div>
  );
};
export default Home;
