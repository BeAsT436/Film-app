import styles from './MovieDetailsLayout.module.css'

const MovieDetailsLayout = ({ children }) => {
  return <div className={styles.content}>{children}</div>
}
export default MovieDetailsLayout
