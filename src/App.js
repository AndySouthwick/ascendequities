import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Apply from './pages/apply/apply'

class App extends Component {


  render() {
    return (
        <Switch>
          <Route exact path="/#/:id" component={Apply}/>
        </Switch>

    );
  }
}

export default App;
