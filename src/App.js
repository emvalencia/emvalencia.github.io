import React, { Component } from 'react';
import './App.css';
import HomeLayout from './components/homepage/HomeLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeLayout />
      </div>
    );
  }
}

export default App;
