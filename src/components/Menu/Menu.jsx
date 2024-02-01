import React from 'react'
import { Nav, Link } from './Menu.styled'

export const Menu = () => {
  return (
    <header>
    <Nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorite</Link>
    </Nav>
    </header>
  )
}
