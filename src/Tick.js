import React from 'react';
import Welcome from './Welcome';


function Tick(props) {
	let temp = '';
	if(props.name === 'Molly'){
	 temp = 
	    <div>
	      <Welcome firstName={props.name} lastName="McConnell"/>  
	    </div>
	  
	}else{
		temp = 
			<div>
			<h1>You're not Molly</h1>
			</div>
	
	}
	return temp;
}

export default Tick;
