import React from 'react';
import './Layout.css'
import {Link} from 'react-router-dom'
import Nav from '../nav/Nav';

const Layout = (props) => {
  const {user, logout, handleLogin, handleRegister} = props
  return (
    <div className='layout'>
    <header>
      <h3><Link to ='/'>Camp Connect</Link></h3>
      {user && <div className="user-name">{user.username}</div>}
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