import React from 'react'
import {Link} from 'react-router-dom';

const MovieItem = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} className="movieItem">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster"/>
            <p>{movie.title}</p>
        </Link>
    )
}

export default MovieItem
