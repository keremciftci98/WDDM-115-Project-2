import { useParams, useNavigate } from "react-router-dom";
import { append_to_movie, image_uri, requests } from "../Request";
import { useEffect, useState } from "react";
import trophy from "../assets/trophy.png";
import { FaCircleXmark } from "react-icons/fa6";


function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch movie details and other logic...

  const handleGoBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  const url = requests.movieDetail + id + append_to_movie;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [url]);
  return (
    
  );
}

export default MoviePage;
