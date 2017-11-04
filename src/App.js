import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'

class App extends Component {


  render() {
    return (

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>

    );
  }
}

export default App;
