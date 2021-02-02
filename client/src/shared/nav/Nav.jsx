import React from 'react'
import './Nav.css'
import { NavLink,} from 'react-router-dom'
import CustomModal from '../../components/customModal/CustomModal'
import Login from '../../screens/login/Login'
import Register from "../../screens/register/Register";

const Nav = (props) => {
  const { user, logout, handleLogin, handleRegister } = props


  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

const authenticatedOptions = (
  <>
    <div className="link" onClick={logout}>Logout</div>
  </>
)

const unauthenticatedOptions = (
  <>
    <div className="link" onClick={handleOpenLogin}>Login</div>
    <div className="link" onClick={handleOpenRegister}>Register</div>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className="link" to="/search">Search</NavLink>
    <NavLink className="link" to="/sites">Sites</NavLink>
  </>
)

  return (
    <>
      <nav className='nav'>
      {alwaysOptions}
      {user ? authenticatedOptions : unauthenticatedOptions}    
      </nav>
      <CustomModal
        open={openLogin}
        close={handleCloseLogin}
      >
        <Login
          handleLogin={handleLogin}
          close={handleCloseLogin}
        />
      </CustomModal>
      <CustomModal
        open={openRegister}
        close={handleCloseRegister} Register
      >
        <Register
          close={handleCloseRegister}
          handleRegister = {handleRegister}
        />
      </CustomModal>
    </>
  )
}

export default Nav