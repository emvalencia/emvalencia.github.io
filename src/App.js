import React, { Component } from 'react';
import './App.css';
import HomeLayout from './components/homepage/HomeLayout';
import {Parallax} from 'react-parallax';

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
