import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from "materialize-css";

function Login() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const PostData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password,
        email
      })
    }).then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        }
        else {
          M.toast({ html: "Signed In Success", classes: "#64dd17 light-green accent-4" });
          history.push('/');
        }
      }).catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="mycard">
      <div className="authcard input-field">
        <h2 className="head">LOGIN</h2>
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn waves-effect waves-light"
          onClick={() => PostData()}
        >
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