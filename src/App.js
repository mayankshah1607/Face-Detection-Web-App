import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import ImageForm from './components/ImageForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <ImageForm/>
      </div>
    );
  }
}

export default App;
