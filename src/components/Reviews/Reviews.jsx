import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import api from "../../api/api";
import Spinner from "../Spinner/Spinner";
import ReviewsStyled from "./ReviewsStyled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  console.log("movieId :>> ", id);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const res = await api.getMovieReviews(id);
    console.log("res :>> ", res);
    await setReviews(res);
    setLoading(false);
  }
  return (
    <ReviewsStyled>
      {reviews.length > 0 ? (
        <ul className="reviewList">
          {reviews.map((review) => (
            <li className="reviewItem" key={review.id}>
              <h2 className="reviewTitle">{review.author}</h2>
              <p className="reviewText">{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="notFound">We don't have any reviews for this movie</h2>
      )}

      {loading ?? <Spinner />}
    </ReviewsStyled>
  );
};

export default Reviews;
