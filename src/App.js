import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation';
import ImageForm from './components/ImageForm.js';
import ImageFrame from './components/ImageFrame.js';
import './components/ImageForm.css'
import 'tachyons';


const app = new Clarifai.App({
  apiKey: '852e4f9bebbe479d8847a6c96168a1a3'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgURL: '',
      age: '',
      gender: '',
      origin: '',
      showResult: false
    }
  }

  onTextChange = (event) => {
    this.setState({input: event.target.value});
  }

  setProps = (age,gender,origin) => {
    this.setState({age: age,gender: gender, origin: origin});
  }

  onButtonSubmit = () => {

    this.setState({imgURL: this.state.input});
    this.setState({showResult: true});
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
    .then( response => {
      console.log(response.rawData.outputs[0].data.regions[0].data.face)
        this.setProps(response.rawData.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name,
          response.rawData.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name,
          response.rawData.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name
        );
      })
    .catch(err=>{})
  }



  render() {
    return (
      <div className="App">
        <Navigation/>
        <ImageForm onTextChange={this.onTextChange} onButtonSubmit={this.onButtonSubmit}/>
        { this.state.showResult ? <ImageFrame imgURL={this.state.imgURL} age={this.state.age} gender={this.state.gender} origin={this.state.origin}/> : null }
      </div>
    );
  }
}

export default App;
