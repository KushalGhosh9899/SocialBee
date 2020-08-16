import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import './profilestyle.css';
import Navbar from './components/navbar';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Home from './components/screens/home';
import Profile from './components/screens/profile';
import Login from './components/screens/login';
import Signup from './components/screens/signup';
import Createpost from './components/screens/createpost';
import {reducer,initialState} from './reducers/userReducers'

export const UserContext = createContext();

const Routing=()=>{
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext);
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/');
    }else
    history.push('/login');
  },[])
  return(
    <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    <Route path="/signup">
      <Signup></Signup>
    </Route>
    <Route path="/profile">
      <Profile></Profile>
    </Route>
    <Route path="/create">
      <Createpost></Createpost>
    </Route>
  </Switch>
  );
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
        <Navbar />
        <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
