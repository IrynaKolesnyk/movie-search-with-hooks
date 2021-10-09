import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useParams } from "react-router";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";
import MovieDetailsPageStyled from "./MovieDetailsPageStyled";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { lazy } from "react";

const Cast = lazy(() => import("../../components/Cast/Cast"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const history = useHistory();
  // console.log("history :>> ", history);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const res = await api.getMovieDetails(movieId);
    await setMovie(res);
    setLoading(false);
  }

  // const handlerBack = () => {
  //   history.push(this.state.from);
  // }

  return (
    <MovieDetailsPageStyled>
      <button className="goBackBtn" type="button">
        Back
      </button>
      <MovieDetails movie={movie} />
      <div>
        <Link className="detailsLink reviews" to={`/movies/${movieId}/reviews`}>
          Reviews
        </Link>
        <Link className="detailsLink" to={`/movies/${movieId}/cast`}>
          Cast
        </Link>
      </div>
      <div className="castReviews">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/movies/:id/reviews" exact component={Reviews} />
            <Route path="/movies/:id/cast" exact component={Cast} />
          </Switch>
        </Suspense>
      </div>

      {loading ?? <Spinner />}
    </MovieDetailsPageStyled>
  );
};

export default MovieDetailsPage;

// onClick={() => this.props.history.push(this.state.from)}
