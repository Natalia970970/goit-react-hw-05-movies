import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import { MovieBox, InfoBox, AdditionalBox } from './MovieInfo.styled';

export const MovieInfo = ({movieData}) => {
    const { poster_path, original_title, vote_average, overview, genres } = movieData;
    const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
    const genresList = genres.map(genre => genre.name).join(` `);
    const { movieId } = useParams();


    return (
        <><MovieBox>
            <img src={posterUrl} alt={original_title} />
            <InfoBox>
                <h2>{original_title}</h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genresList}</p>
            </InfoBox>
        </MovieBox>
        <AdditionalBox>
            Additional information
            <ul>
                <li>
                    <Link
                        to={`/movies/${movieId}/cast`}
                    >
                        Cast
                    </Link>
                </li>
                <li>
                    <Link
                        to={`/movies/${movieId}/reviews`}
                    >
                        Reviews
                    </Link>
                </li>
            </ul>
        </AdditionalBox></>
    )
};

MovieInfo.propTypes = {
    data: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ),
    }),
};