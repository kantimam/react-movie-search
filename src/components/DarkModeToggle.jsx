import React from 'react'

const DarkModeToggle = ({toggleDark}) => {
    return (
        <label className="darkModeToggle">
            <input onClick={toggleDark} className="switch-input" type="checkbox" />
            <span className="switch-label" data-on="On" data-off="Off"></span>
            <span className="switch-handle"></span>
        </label>
    )
}

export default DarkModeToggle
