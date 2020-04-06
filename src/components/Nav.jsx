import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import DarkModeToggle from './DarkModeToggle'

export const Nav = ({ toggleDark, darkMode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <nav className="inner">
            <div className="inner normalNav">
                <h3>MOVIE</h3>
                <ul>
                    <li><NavLink to="/top">top rated</NavLink></li>
                    <li><NavLink to="/popular">Popular</NavLink></li>
                </ul>
                <SearchBar />
                <DarkModeToggle darkMode={darkMode} toggleDark={toggleDark} />
                <div onClick={() => setMobileOpen(!mobileOpen)} className="openNavIcon">NAV</div>

            </div>
            {mobileOpen &&
                <div className="mobileNav">
                    <ul>
                        <li><NavLink to="/top">top rated</NavLink></li>
                        <li><NavLink to="/popular">Popular</NavLink></li>
                    </ul>
                    <SearchBar />

                </div>
            }
        </nav>
    )
}
