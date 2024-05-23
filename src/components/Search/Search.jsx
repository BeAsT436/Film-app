import styles from "./Search.module.css";
import { useState } from "react";

export const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  
  const handleClick = ()=>{
    props.handleSearchClick(searchTerm, searchType)
    setSearchTerm("")
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="enter movie title"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      <select
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
        value={searchType}
      >
        <option value="">all</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <button onClick={handleClick}>search</button>
    </div>
  );
};
