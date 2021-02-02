import React from 'react';
import './Layout.css'
import {Link} from 'react-router-dom'
import Nav from '../nav/Nav';

const Layout = (props) => {
  const {user, logout, handleLogin, handleRegister} = props
  return (
    <div className='layout'>
    <header className ='header'>
      <div className='logo'><Link to ='/'>Camp <br/><span className='span'>Connect</span></Link></div>
      {user && <div className="user-name">Welcome<br/><span>{user.username}</span></div>}
        <Nav
          user={user}
          logout={logout}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
    </header>
      <div className='layout-children'>
        {props.children}
      </div>      
    </div>
  );
};

export default Layout;