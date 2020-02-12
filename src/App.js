import React from 'react';
import './App.css';
import Home from './home';
import Form from './form';
import Exercise from './exercise';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends React.Component {
  render(){
   
      return (
    <Router>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/exercise">Exercise</Link>
          </li>
        </ul>
        <hr />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
        </Switch>
      
    </Router>
  );
}
  }


export default App;
