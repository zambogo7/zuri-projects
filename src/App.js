import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Linktree from './components/Linktree/Linktree';

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Linktree/>

      </div>
    

    
    );
  }
}

export default App;
