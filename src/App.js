import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About'
import Works from './pages/Works'
import Home from './pages/Home'

function App() {

  return (

    <div className="App">
     
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/works'>
              <Works/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
