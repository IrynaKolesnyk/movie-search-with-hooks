import { useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import api from "../../api/api";
import CardsMovies from "../../components/CardsMovies/CardsMovies";
import Searchbar from "../../components/Searchbar/Searchbar";
import Spinner from "../../components/Spinner/Spinner";

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const { url } = useRouteMatch();

  async function fetchData(query) {
    setLoading(true);
    const res = await api.searchMoviesByQuery(query);
    setMovies(res);
    setLoading(false);
  }

  return (
    <div>
      <Searchbar fetchData={fetchData} />
      <CardsMovies movies={movies} location={location} url={url} />
      {loading ?? <Spinner />}
    </div>
  );
};

export default MoviesPage;
