import React from 'react'

const DarkModeToggle = ({ toggleDark, darkMode }) => {
    return (
        <label className={`darkModeToggle ${darkMode ? 'darkModeActive' : ''}`}>
            <input onClick={toggleDark} className="switch-input" type="checkbox" />
            dark
            <span className="switch-handle">
                light
            </span>
        </label>
    )
}

export default DarkModeToggle
