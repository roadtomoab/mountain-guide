import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import LoggedOutNav from './Components/LoggedOutNav';
import LoggedInNav from './Components/LoggedInNav';


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
        {currentUser ? <LoggedInNav setCurrentUser={setCurrentUser}/> : <LoggedOutNav />}
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
