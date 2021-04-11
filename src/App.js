import React, {Component} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from './components/NavBar'
import PlaylistsContainer from "./containers/PlaylistsContainer";
import SignUpForm from "./components/users/SignUpForm";
import LogInForm from "./components/users/LogInForm";
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <h1>MusicTaste</h1> */}
        <Router>
          <NavBar/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/logout" component={LogInForm} />
          <Route exact path="/login" component={LogInForm} />
          <Route path='/playlists' render={routerProps => <PlaylistsContainer {...routerProps}/>} />
          <Route component={ErrorPage}/>
          </Switch>
        </Router>
        <br /> <br /> 
        <Footer /> 
        
      </div>
    );

  }
  
}

export default App;
