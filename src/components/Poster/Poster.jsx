
const Poster = (props) => {
    return (
        <div><img src={props.movie.Poster} alt={props.movie.Title} /></div>
    )
}

export default Poster