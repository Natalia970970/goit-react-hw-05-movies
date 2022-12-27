const API_KEY = `c7932d4433e8fee3124d33f1c9b27082`;

export const fetchTrandingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    ).then(response => response.json());
};

export const fetchMovieById = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    ).then(response => response.json());
};

export const fetchCastById = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    ).then(response => response.json());
};

export const fetchReviewsById = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    ).then(response => response.json());
};

export const fetchMoviesByQuery = query => {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    ).then(response => response.json());
};