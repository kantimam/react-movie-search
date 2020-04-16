import React, {useEffect, useState, useRef} from 'react'

export const LoadingScreen = ({message, delay=0}) => {   
    const [visible, setVisible]=useState(delay? false : true);
    const timeOutRef=useRef(null);

    useEffect(() => {
        if(delay) timeOutRef.current=setTimeout(()=>setVisible(true), delay);
        return () => {
            if(delay) clearTimeout(timeOutRef.current);
        }
    }, [])

    if(!visible) return null;

    return (
        <div className="loadingScreen flexCenterAll">
            {message}
        </div>
    )
}
