import React from 'react'
import { Navigate } from 'react-router-dom'

const Homepagee = () => {
    return (
        <div className="hero">
            <Navigate to='/littleapps/pong' />
        </div>
    )
}

export default Homepagee