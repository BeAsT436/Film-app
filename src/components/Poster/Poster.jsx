import styles from "./Poster.module.css";

const getClassFromRatingValue = (src, value, styles) => {
  let pct = formatValueToPercentage(src, value)

  if (pct >= 75) return styles.green
  if (pct >= 50) return styles.orange

  return styles.red
}

const RATINGS = {
  IMDB: 'Internet Movie Database',
  METASCORE: 'Metacritic',
  RTT: 'Rotten Tomatoes',
}

const formatValueToPercentage = (src, value) => {
  if (src === RATINGS.IMDB) return `${parseFloat(value) * 10}`
  if (src === RATINGS.METASCORE || src === RATINGS.RTT) return `${parseInt(value)}`

  return value
}

const RatingCircle = ({ rating }) => {
  return (
    <div className={`${styles.ratingCircle} ${getClassFromRatingValue(rating.Source, rating.Value, styles)}`}>
      {formatValueToPercentage(rating.Source, rating.Value)}%
    </div>
  )
}

const RatingsDisplay = ({ ratings }) => {
  return (
    <div className={styles.displayRatings}>
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
