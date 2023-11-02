import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriends'
import Logout from './componenets/Logout'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="login">Login</Link>
          <Link className="link" to="friends">Friends</Link>
          <Link className="link" to="firneds/add">Add Friends</Link>
          <Link className="link" to="login">Logout</Link>
        </header>
        <Route exact path="/">
          <Login />
        </Route>
        <Route  exact path="/login">
          <Redirect to="/" />
        </Route>
        <PrivateRoute exact path="/friends" component={FriendList} />
      
        <PrivateRoute exact path="/friends/add" component={AddFriend} />
     
        <PrivateRoute exact path="/logout" component={Logout} />
     

      </div>
    </Router>
  );
}

export default App;
