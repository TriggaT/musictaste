import React, {Component} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import NavBar from './components/NavBar'
import SongForm from "./components/SongForm";
import Songs from "./components/Songs";

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>MusicTaste</h1>
        <Router>
          <NavBar/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={Songs}/>
          <Route exact path="/songs/new" component={SongForm}/>
          <Route component={ErrorPage}/>
          </Switch>
        </Router>
        
      </div>
    );

  }
  
}

export default App;
