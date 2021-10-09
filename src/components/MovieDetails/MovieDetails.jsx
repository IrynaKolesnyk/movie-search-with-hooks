import MovieDetailsStyled from "./MovieDetailsStyled";

const MovieDetails = ({ movie }) => {
  return (
    <MovieDetailsStyled>
      <img
        className="detailsImg"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2 className="detailsTitle">{movie.title}</h2>
        <h2 className="detailsSubtitle">Overview</h2>
        <p className="detailsOverview">{movie.overview}</p>
        <h2 className="detailsSubtitle">Genres</h2>
        <ul className="detailsList">
          {movie.genres &&
            movie.genres.map((genre) => (
              <li className="detailsItem" key={genre.id}>
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
    </MovieDetailsStyled>
  );
};

export default MovieDetails;
