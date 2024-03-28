import styles from "./Poster.module.css"
const Poster = ({movie}) => {
    return (
        <div><img src={movie.Poster} alt={movie.Title} /></div>
    )
}

export default Poster