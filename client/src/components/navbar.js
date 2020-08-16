import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../App';
function Navbar(){
  const {state,dispatch} = useContext(UserContext);
  const renderList = () =>{
    if(state){
      return[
        <li><Link to="/profile" className="head-link">Profile</Link></li>,
        <li><Link to="/create" className="head-link">Create Post</Link></li>
      ]
    }else{
      return[
        <li><Link to="/login" className="head-link">Login</Link></li>,
        <li><Link to="/signup" className="head-link">Signup</Link></li>
      ]
    }
  }
  return ( 
    <nav>
    <div className="nav-wrapper">
      <Link to={state?"/":"/login"} className="brand-logo">Social Bee</Link>
      <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
      <ul className="right hide-on-med-and-down">
        {renderList()}
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
