import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Spinner from "../../components/Spinner/Spinner";
import { useLocation, useRouteMatch } from "react-router";
import CardsMovies from "../../components/CardsMovies/CardsMovies";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    setLoading(true);
    fetchData();
    return setLoading(false);
  }, [loading]);

  async function fetchData() {
    const res = await api.getTrending();
    setTrending(res);
  }

  return (
    <>
      <HomePageStyled>
        <h2 className="title">Trending this week</h2>
        <CardsMovies movies={trending} location={location} url={url} />
      </HomePageStyled>
      {loading && <Spinner />}
    </>
  );
};

export default HomePage;
