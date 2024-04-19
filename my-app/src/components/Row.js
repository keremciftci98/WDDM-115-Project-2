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
    return (
        <section className="h-dvh">
            <div className="container mt-36 mx-auto border border-white rounded-[36px]">
                <div className="flex flex-col px-28 pt-16 mb-5 max-h-[calc(100dvh-350px)] overflow-y-auto">
                    <div className='grid grid-cols-5 gap-6 justify-center items-center mx-auto'>
                        {
                            movies.map((movie, index) => {
                                return (
                                    <div key={index}>
                                        <button onClick={() => handleMovieClick(movie.id)}><img src={`${image_uri}/w300/${movie.poster_path}`} alt="" /></button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="flex lex-col px-28 mb-5 text-white space-x-16">
                    <h2 className="rammetto-one text-4xl">{year}</h2>
                    <p className="text-center  raleway font-normal text-xl">
                        The {year - 1928}th Academy Awards ceremony, which was presented by the  Academy of Motion Picture Arts and Sciences, took place on March 10,  {year}, at the Dolby Theatre in Hollywood, Los Angeles. During the gala,  the AMPAS presented Academy Awards in 23 categories honoring films  released in {year - 1}.
                    </p>
                </div>
            </div>
        </section>
    );
}

Row.propTypes = {
    movies: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired
}

export default Row;