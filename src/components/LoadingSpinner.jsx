import React from 'react'
import '../styles/loadingSpinner.css'

export const LoadingSpinner = () => {
    return (
        <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    )
}
