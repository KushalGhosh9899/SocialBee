import React,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../App';
function Navbar(){
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext);
  const renderList = () =>{
    if(state){
      return[
        <li><Link to="/profile" className="head-link">Profile</Link></li>,
        <li><Link to="/create" className="head-link">Create Post</Link></li>,
        <li>
          <button className="btn #c62828 red darken-3"style={{margin: 0}}
          onClick={()=>{
            localStorage.clear();
            dispatch({type:"CLEAR"});
            history.push('/login');
          }}
          >
            Logout            
          </button>
        </li>
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
