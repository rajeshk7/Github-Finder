import React, {Component} from 'react';
import Navbar from './components/layout/NavBar'
import './App.css';

class App extends Component {
  render()  {
    // const name = "Rajesh Kumar";
    // const flag_1 = false;
    // const flag_2 = false;
    // const show = "Loading . . .";

    return (
      <div className = 'App' >
        < Navbar title='Github Finder'/>
      </div>
    );
  }
}

export default App;

// <h1> {flag_1 ? flag_2 && name : show} </h1>
// Another way, used short circuit instead of ternary operator with null
