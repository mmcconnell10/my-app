import React from 'react';
import logo from './logo.svg';
import Toggle from './Toggle';
import LoginControl from './loginControl';


function Home(){
	return(
		<header className="App-header">
          <img src={logo} className='App-logo' alt="logo" />
          <Toggle/>
          <LoginControl/>
        </header>
	);
}

export default Home;