import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import DarkModeToggle from './DarkModeToggle'

export const Nav = ({toggleDark, darkMode}) => {
    return (
        <nav>
            <div className="inner">
                <ul>
                    <li><NavLink to="/top">top rated</NavLink></li>
                    <li><NavLink to="/popular">Popular</NavLink></li>
                    {/* <li><NavLink to="">ASD</NavLink></li> */}
                </ul>
                <SearchBar/>
                <DarkModeToggle darkMode={darkMode} toggleDark={toggleDark}/>
            </div>
        </nav>
    )
}
