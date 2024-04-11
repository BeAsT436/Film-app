import styles from "./Poster.module.css";

function getColorClass(source, value, styles) {
    let percentage    

    if(source === "Internet Movie Database"){
        percentage = parseFloat(value) / 10 * 100
    }else if(source === "Rotten Tomatoes"){
        percentage = parseInt(value, 10)
    }else if(source === "Metacritic"){
        percentage = parseInt(value, 10)
    }

    if(percentage >= 75)return styles.green
    if(percentage >= 50)return styles.orange
    return styles.red
}
const RatingCircle = ({ rating }) => {
  return (
    <div
      className={`${styles.ratingCircle} ${getColorClass(
        rating.Source,
        rating.value,
        styles
      )}`}
    ></div>
  );
};

const RatingsDisplay = ({ ratings }) => {
  return (
    <div style={{}}>
      {ratings.map((value, idx) => (
        <RatingCircle rating={value} key={idx} />
      ))}
    </div>
  );
};

const Poster = ({ movie }) => {
  return (
    <div className={styles.poster}>
      <img className={styles.posterImg} src={movie.Poster} alt={movie.Title} />
      <div className={styles.ratings}>
        <RatingsDisplay ratings={movie.Ratings} />
      </div>
    </div>
  );
};

export default Poster;
