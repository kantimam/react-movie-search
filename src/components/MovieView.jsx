import React, {useEffect, useState} from 'react'
import { apiGetMovie } from '../api/api'
import { LoadingScreen } from './LoadingScreen';

const MovieView = ({match}) => {
    const [movie, setMovie]=useState(null);
    const [error, setError]=useState('');
    useEffect(() => {
        apiGetMovie(match.params.id).then(json=>setMovie(json)).catch(e=>setError('failed! :( maybe try reloading the page'))
    }, [match.params.id])
    
    if(!movie) return <LoadingScreen delay={800} message="loading"/>
    
    return (
        <div className="movieView">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster"/>
            <div className="description">
                <h1>
                    {movie.title}
                </h1>
                <div className="genres">
                    {movie.genres.map(item=>
                        <div className="genreItem" key={`tag_${movie.id}_${item.name}`}>
                            {item.name}
                        </div>
                    )}
                </div>

                <p>
                    released: {movie.release_date}
                </p>
                <p>
                    popularity: {movie.popularity || 0} / 10
                </p>
                <p>
                    vote average: {movie.vote_average || 0} / 10 with {movie.vote_count || 0} votes
                </p>

                <p className="overview">
                    {movie.overview}
                </p>

                <a href={"https://www.themoviedb.org/movie/"+movie.id}>
                    see full description on themoviedb.org
                </a>
            </div>
        </div>
    )
}

export default MovieView
