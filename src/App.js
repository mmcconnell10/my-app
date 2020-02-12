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
      <div>
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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
      </div>
    </Router>
  );
}
  }


export default App;
