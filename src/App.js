import React, {Component} from "react"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>MusicTaste</h1>
        <Router>
          <NavBar/>
        </Router>
        
      </div>
    );

  }
  
}

export default App;
