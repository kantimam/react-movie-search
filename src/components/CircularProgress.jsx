import React from 'react'

const CircularProgress = ({radius=60, stroke=4, progress=100, color="black", className=""}) => {
    const normalizedRadius=radius-stroke*2;
    const circumference=normalizedRadius*2*Math.PI;
    const strokeDashoffset=(circumference-progress / 100 * circumference);
    return (
        <svg
            className={className}
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    )
}

export default CircularProgress
