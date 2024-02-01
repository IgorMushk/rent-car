import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>The company for the rental of cars in Ukraine</h1>
        <p>Your best choice when planning your travels</p>
        <Link to={'/catalog'}> Select a car </Link>
    </div>
  )
}

