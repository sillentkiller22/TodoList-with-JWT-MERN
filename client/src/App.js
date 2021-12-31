import React from 'react';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Router>
  );
}

export default App;
