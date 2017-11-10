import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import Test from './test'

class App extends Component {


  render() {
    return (

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/test" component={Test}/>
        </Switch>

    );
  }
}

export default App;
