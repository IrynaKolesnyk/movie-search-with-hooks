import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import api from "../../api/api";
import Spinner from "../Spinner/Spinner";
import CastStyled from "./CastStyled";
import defaultImg from "../../images/unnamed.jpg";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const res = await api.getMovieCast(id);
    console.log("res :>> ", res);
    await setCast(res);
    setLoading(false);
  }
  return (
    <CastStyled>
      {cast.length > 0 ? (
        <ul className="castList">
          {cast.map(({ id, profile_path, name }) => (
            <li className="castItem" key={id}>
              <img
                className="castImg"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <h2 className="castTitle">{name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="notFound">Page not found </h2>
      )}
      {loading ?? <Spinner />}
    </CastStyled>
  );
};

export default Cast;
