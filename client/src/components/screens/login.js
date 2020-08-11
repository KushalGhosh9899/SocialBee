import React from 'react';
import {Link} from 'react-router-dom';

function Login(){
  return ( 
      <div className="mycard">
        <div className="authcard input-field">
          <h2 className="head">LOGIN</h2>
          <input
          type="text"
          placeholder="Enter your Email"></input>
          <input
          type="password"
          placeholder="Enter your Password"></input>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Login            
          </button>
          <h6>
            Don't have an Account ? <Link to="/signup" >Signup</Link>
          </h6>
        </div>
      </div>
  );
}

export default Login;