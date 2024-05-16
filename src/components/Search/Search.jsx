import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div>
      <input type="text" placeholder="enter movie title" />
      <select>
        <option value="">all</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
    </div>
  );
};
