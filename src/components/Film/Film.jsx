import styles from "./Film.module.css";

const Film = (props) => {
  return (
    <li className={styles.list}>
      <h3>{props.movie.Title}</h3>
      <h4>{props.movie.Year}</h4>
      <img className={styles.img} src={props.movie.Poster} alt='' />
      {/* <p>{props.movie.#}</p> */}
    </li>
  );
};

export default Film;
