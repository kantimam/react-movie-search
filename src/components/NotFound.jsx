import React from 'react'
import catIcon from '../static/cat404.svg';

const NotFound = () => {
    return (
        <div id="notFound">
            <img src={catIcon} alt="404 cat"/>
            nothing found
        </div>
    )
}

export default NotFound
