import React from 'react'
import './Nav.css'
import { NavLink,Link } from 'react-router-dom'

const Nav = (props) => {
  const {user, logout} = props
const authenticatedOptions = (
  <>
    <Link className="link" onClick={logout}>Logout</Link>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/login">Login</NavLink>
    <NavLink className="link" to="/register">Register</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className="link" to="/search">Search</NavLink>
    <NavLink className="link" to="/sites">Sites</NavLink>
  </>
)

  return (
    <nav className='nav'>
    {alwaysOptions}
    {user ? authenticatedOptions : unauthenticatedOptions}    
    </nav>
  )
}

export default Nav