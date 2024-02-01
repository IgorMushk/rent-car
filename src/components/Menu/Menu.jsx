import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <header>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/catalog">Catalog</NavLink></li>
        <li><NavLink to="/favorites">Favorite</NavLink></li>
    </ul>
    </header>
  )
}
