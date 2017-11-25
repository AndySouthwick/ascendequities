import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import Students from './pages/students'
import OurStory from './pages/story'
import Apply from './pages/apply/apply'

class App extends Component {


  render() {
    return (
        <Switch>
          <Route exact path="/" component={Apply}/>
        </Switch>

    );
  }
}

export default App;
