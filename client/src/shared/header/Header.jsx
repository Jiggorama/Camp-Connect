import React from 'react';
import Nav from '../nav/Nav';

const Header = (props) => {
  const {user, logout} = props
  return (
    <header>
      <h3>Camp Connect</h3>
      {user && <div className="user-name">{user.username}</div>}
      <Nav user={user} logout={logout}/>
    </header>
  );
}

export default Header;