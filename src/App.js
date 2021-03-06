import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import Students from './pages/students'
import OurStory from './pages/story'
import Apply from './pages/apply/apply'
import University from './pages/university'
import Test from './test'
import Pip from './pages/success/pip'

class App extends Component {


  render() {
    return (
        <Switch>
          <Route exact path="/university" component={University}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/Students" component={Students}/>
          <Route exact path="/story" component={OurStory}/>
          <Route exact path="/apply-now/:id" component={Apply}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/pip" component={Pip}/>
        </Switch>

    );
  }
}

export default App;
