import React from 'react'
import { Navigate } from 'react-router-dom'

const logout = () => {
  return (
    <div className='logout'>
        <h3>Are you sure</h3>
        <button>Logout Now</button>
    </div>
  )
}

export default logout