import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { MovieList } from './MoviesList.styled';

export const MoviesList = ({trandingMovies}) => {
    const location = useLocation();

    return (
        <MovieList>
            {trandingMovies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </MovieList>
    )
};

MoviesList.propTypes = {
    trandingMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};