import React, {Component} from 'react';
import CountryGame from './CountryGame';
//import worldImg from './world.jpg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <header
          className='title-header'
          style={{backgroundColor:'orange'}}
        >
          <h1 className='title-text'>Guess the flag</h1>
        </header>
        <CountryGame />
      </div>
    )
  }
}

export default App;