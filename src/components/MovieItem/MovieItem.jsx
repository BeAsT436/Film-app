import styles from "./MovieItem.module.css";

const MovieItem = (props) => {
  return (
    <li className={styles.list}>
      <img className={styles.img} src={props.movie.Poster} alt="" />
      <div className={styles.info}>
        <h3 className={styles.title}>{props.movie.Title}</h3>
        <h4 className={styles.year}>{props.movie.Year}</h4>
      </div>
    </li>
  );
};

export default MovieItem;
