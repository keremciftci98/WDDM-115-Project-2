import { useParams, useNavigate } from 'react-router-dom';
import { append_to_movie, image_uri, requests } from '../Request';
import { useEffect, useState } from 'react';
import trophy from '../assets/trophy.png';
import { FaCircleXmark } from 'react-icons/fa6';

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
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [url]);
    return (
        <section className="h-dvh">
            <div className="container mt-12 mx-auto">
                <div className="flex item-center justify-end">
                    <button onClick={handleGoBack}>
                        <FaCircleXmark size={40} className='text-white' />
                    </button>
                </div>
                <div className="flex pt-16 mb-5 overflow-y-auto space-x-24">
                    <div className='w-1/2'>
                        <img src={`${image_uri}/w500/${movie.poster_path}`} alt="" />
                    </div>
                    <div className='text-white w-1/2'>
                        <h1 className=' text-[32px] rammetto-one text-center mb-5'>{movie.title} ({movie.release_date})</h1>
                        <p className='text-xl font-semibold mb-5'>Director: Alexander Payne</p>
                        <p className=' text-xl mb-5'>{movie.overview}</p>
                        <h3 className=' font-extrabold text-3xl mb-5'>Wins:</h3>
                        <div className='flex gap-10'>
                            <div className="flex flex-col max-w-32">
                                <img src={trophy} alt="trophy won" className=' mb-5' />
                                <p>Best Supporting actress:
                                    DaVine Joy Randolph</p>
                            </div>
                            <div className="flex flex-col max-w-32">
                                <img src={trophy} alt="trophy won" className=' mb-5' />
                                <p>Best Film editing:
                                    Kevin Tent
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoviePage;