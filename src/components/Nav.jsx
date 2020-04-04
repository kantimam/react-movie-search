import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import DarkModeToggle from './DarkModeToggle'

export const Nav = ({toggleDark}) => {
    return (
        <nav>
            <div className="inner">
                <ul>
                    <li><NavLink to="">Latest</NavLink></li>
                    <li><NavLink to="">Trending</NavLink></li>
                    <li><NavLink to="">ASD</NavLink></li>
                </ul>
                <SearchBar/>
                <DarkModeToggle toggleDark={toggleDark}/>
            </div>
        </nav>
    )
}
