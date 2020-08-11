import React from 'react';
import {Link} from 'react-router-dom';

function Signup(){
  return ( 
    <div className="mycard">
    <div className="authcard input-field">
      <h2 className="head">SIGNUP</h2>
      <input
      type="text"
      placeholder="Enter your Name"></input>
      <input
      type="text"
      placeholder="Enter your Email"></input>
      <input
      type="password"
      placeholder="Enter your Password"></input>
      <button className="btn waves-effect waves-light" type="submit" name="action">
        Signup            
      </button>
      <h6>
        Already have an Account ? <Link to="/login" >Login</Link>
      </h6>
    </div>
  </div>
  );
}

export default Signup;