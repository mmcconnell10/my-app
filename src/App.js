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
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form}/>
          <Route path="/exercise" component={Exercise} exact />
          <Route component={Error} />
        </Switch>
      
    </Router>
  );
}
  }
function Error() {
  return (
    <div>
      <h2>Oops! That URL doesn't exist! Please click a link in the header to get back to where you want to go.</h2>
    </div>
  );
}


export default App;
