import React from 'react'

const createShells=(num)=>{
    const shells=[]
    for(let i=0; i<num; i++){
        shells.push(<div key={"movie_pre_" + i} className="movieItemShell"/>)
    }
    return shells;
}

const MovieFeedShell = () => {
    return (
        <div className="thumbnailGrid">
            {createShells(12)}
        </div>
    )
}

export default MovieFeedShell
