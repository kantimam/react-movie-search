import React from 'react'
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
    const fixedDate = movie.release_date.split('-').reverse().join('-');
    return (
        <Link to={`/movie/${movie.id}`} className="movieItem">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
            <div className="movieItemDesc">
                <p className="moviteItemTitle">{movie.title}</p>
                <div className="dateRatingWrapper">
                    <p className="movieRating flexCenterAll">{movie.vote_average}</p>
                    |
                    <p className="movieDate">{fixedDate}</p>
                </div>
            </div>
            {/* <div className="movieTagsWrapper">
            </div> */}
        </Link>
    )
}

export default MovieItem
