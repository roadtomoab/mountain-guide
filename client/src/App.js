import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import LoggedOut from './Components/LoggedOut';
import LoggedIn from './Components/LoggedIn';
import Mountains from './Components/Mountains';
import Favorites from './Components/Favorites';


function App () {

  const [currentUser, setCurrentUser] = useState(null);
  const [mountainsArray, setMountainsArray] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);

  function fetchMountains () {
    fetch("/mountains")
    .then(r => r.json())
    .then(data => setMountainsArray(data))
  }

  useEffect(fetchMountains, [])

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);

  function addToFavorites (clickedMountain) {

    const updatedFavoritesArray = favoritesArray.find((object) => object.id === clickedMountain.id)

    if (updatedFavoritesArray === undefined) {

      // start post request

      const favObj = { 
        favorite: {
          mountain_id: clickedMountain.id,
          // user_id: currentUser.id 
        }
        
      }

      fetch("/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favObj),
      })
      .then(r => r.json())
      .then(data => console.log(data));

      setFavoritesArray([...favoritesArray, clickedMountain])
    }
    else {
      console.log("duplicate")
    }

  }


  return (
      <div className="app">
        {currentUser ? <LoggedIn setCurrentUser={setCurrentUser}/> : <LoggedOut/>}
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/mountains">
              <Mountains
              mountainsArray={mountainsArray}
              addToFavorites={addToFavorites}
              />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login setCurrentUser={setCurrentUser}/>
            </Route>

            <Route path="/favorites">
              <Favorites favoritesArray={favoritesArray}/>
            </Route>

          </Switch>
      </div>
  )

}

export default App;
