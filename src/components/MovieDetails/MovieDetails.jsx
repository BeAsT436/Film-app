import styles from "./MovieDetails.module.css";
const MovieDetails = ({ movie }) => {
  const details = [
    {
      label: "Year",
      value: movie.Year,
    },
    {
      label: "Actors",
      value: movie.Actors,
    },
    {
      label: "Runtime",
      value: movie.Runtime,
    },
    {
      label: "Released",
      value: movie.Released,
    },
    {
      label: "Country",
      value: movie.Country,
    },
    {
      label: "Language",
      value: movie.Language,
    },
  ];
  return <div>{details.map((detail, index)=>(
    <p key={index} className="detailItem"><span className="detailLable">{detail.label}: </span>{detail.value}</p>
  ))}</div>;
};

export default MovieDetails;
