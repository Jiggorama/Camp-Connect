import React from 'react';
import Header from '../header/Header';

const Layout = (props) => {
  const {user, handleLogout} = props
  return (
    <div className='layout'>
      <Header user={user} logout={handleLogout}/>
      <div className='layout-children'>
        {props.children}
      </div>      
    </div>
  );
};

export default Layout;