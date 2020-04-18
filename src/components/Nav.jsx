import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import DarkModeToggle from 'react-dark-mode-switch'

export const Nav = ({ toggleDark, darkMode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <nav>
            <div className="inner normalNav">
                <NavLink to="/"><h3>CoronaAid</h3></NavLink>


                <ul>
                    <li><NavLink to="/top">top rated</NavLink></li>
                    <li><NavLink to="/popular">Popular</NavLink></li>
                </ul>
                <SearchBar />
                <DarkModeToggle activeClass="darkActive" id="darkModeToggle" isChecked={darkMode} toggleChecked={toggleDark} />
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
