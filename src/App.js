// import axios from './axios';
import './App.css'
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const UserContext = React.createContext([]);

function App() {
  const [user, setUser] = useState({});

  const LogoutCallback = () => {
    setUser({});
  }

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Navigation LogoutCallback={LogoutCallback} />
        <div className="container mt-5">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/register">
                {/* <SignUp token={token} setToken={setToken} HandleSignUp={HandleSignUp}/> */}
                <Register />
              </Route> 
              <Route path="/login">
                <Login token setToken/>
              </Route>
            </Switch>
          </Router>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;