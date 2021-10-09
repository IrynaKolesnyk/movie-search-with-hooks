import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import api from "../../api/api";
import Spinner from "../Spinner/Spinner";
import CastStyled from "./CastStyled";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  console.log("movieId :>> ", id);

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
  return <CastStyled></CastStyled>;
};

export default Cast;
