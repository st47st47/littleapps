import React from 'react'
import { Navigate } from 'react-router-dom'

const Homepagee = () => {
    return (
        <div className="hero">
            <Navigate to='/littleapps/bubbles' />
        </div>
    )
}

export default Homepagee