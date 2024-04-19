import PropTypes from 'prop-types';
import { image_uri } from "../Request";
import { useNavigate } from 'react-router-dom';

function Row({ movies, year }) {
    console.log(movies);
    const navigate = useNavigate(); // Initialize useHistory

    const handleMovieClick = (movieId) => {
        // Navigate to the movie page with the movie ID as state
        navigate(`/movie/${movieId}`);
    };
   
    );
}

Row.propTypes = {
    movies: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired
}

export default Row;