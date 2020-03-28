import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({list=[]}) => {
    return (
        <div className="thumbnailGrid">
            {list.map(movie=>
                <MovieItem key={"movie_pre_"+movie.id} movie={movie}/>
            )}
        </div>
    )
}

export default MovieList
