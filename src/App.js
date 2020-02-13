import React from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './home';
import Form from './form';
import Exercise from './exercise';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




class App extends React.Component {
  render(){
   
      return (
        <div>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home" style={{color:'white'}}>
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Molly's App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
              <Nav.Link href="/form" style={{color:'white'}}>Form</Nav.Link>
              <Nav.Link href="/exercise" style={{color:'white'}}>Exercise</Nav.Link>
            </Nav>       
          </Navbar.Collapse>
        </Navbar>
        <Router>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/form" component={Form}/>
              <Route path="/exercise" component={Exercise} exact />
              <Route component={Error} />
            </Switch>
        </Router>
    </div>
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
