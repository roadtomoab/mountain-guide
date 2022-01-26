import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from './Components/Home'
import Signup from './Components/Signup';
import Login from './Components/Login'


function App () {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  return (
      <div className="app">
          <div className="nav-bar">
            <img className="logo" src="https://cdn.dribbble.com/users/1888142/screenshots/4086098/media/9964fbf4a9ebc54f9146af7f8259939c.gif" alt="mountain logo" />
            <NavLink exact to="/" >HOME</NavLink>
            <NavLink to="/mountains" >EXPLORE</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
          </div>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login setCurrentUser={setCurrentUser}/>
            </Route>

          </Switch>
      </div>
  )

}

export default App;
