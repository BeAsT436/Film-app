import styles from './MovieDetails.module.css'
import movieDetailsHelper from '../../helpers'

const MovieDetailsTag = ({ detail }) => {
  return (
    <div className={styles.detailItem}>
      <span className={styles.detailLabel}>{detail.label}: </span>
      <span className={styles.detailValue}>{detail.value}</span>
    </div>
  )
}

const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.detailsContainer}>
      {movieDetailsHelper(movie).map((detail, index) => (
        <MovieDetailsTag key={index} detail={detail} />
      ))}
    </div>
  )
}

export default MovieDetails
