import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import BudgetView from './components/BudgetView'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppNavBar/>
       <BudgetView />
      </div>
    );
  }
}

export default App;
