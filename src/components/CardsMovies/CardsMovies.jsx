import { Link } from "react-router-dom";
import CardMoviesStyled from "./CardMoviesStyled";

const CardsMovies = ({ movies, location, url }) => {
  return (
    <CardMoviesStyled>
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <li className="cardItem" key={movie.id}>
              {url === "/" ? (
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className="cardImg"
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <h2 className="movieTitle">{movie.original_title}</h2>
                </Link>
              ) : (
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className="cardImg"
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <h2 className="movieTitle">{movie.original_title}</h2>
                </Link>
              )}
            </li>
          );
        })}
    </CardMoviesStyled>
  );
};

export default CardsMovies;
