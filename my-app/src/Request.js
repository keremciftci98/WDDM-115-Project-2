const key = process.env.REACT_APP_MOVIE_API_KEY;
const base_uri = "https://api.themoviedb.org/3/";
const image_uri = "https://image.tmdb.org/t/p";
const append_to_movie = `?api_key=${key}&language=en-US`;

const requests = {
    winner24: `${base_uri}discover/movie?api_key=${key}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.1&year=2024`,
    winner23: `${base_uri}discover/movie?api_key=${key}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.1&year=2023`,
    winner22: `${base_uri}discover/movie?api_key=${key}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.1&year=2022`,
    winner21: `${base_uri}discover/movie?api_key=${key}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.1&year=2021`,
    winner20: `${base_uri}discover/movie?api_key=${key}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.1&year=2020`,
    winner19: `${base_uri}discover/movie?api_key=${key}&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.1&year=2019`,
    movieDetail: `${base_uri}movie/`
};

export { requests, base_uri, image_uri, append_to_movie };
