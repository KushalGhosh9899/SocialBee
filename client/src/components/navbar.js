import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
  return ( 
    <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">Social Bee</Link>
      <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/login" className="head-link">Login</Link></li>
        <li><Link to="/signup" className="head-link">Signup</Link></li>
        <li><Link to="/profile" className="head-link">Profile</Link></li>
        <li><Link to="/create" className="head-link">Create Post</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
