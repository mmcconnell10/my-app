import React from 'react';
import Welcome from './Welcome';


function Tick(props: {name: string}) {
  return(
    <div>
      <Welcome firstName={props.name} lastName="McConnell"/>  
    </div>
  );
}

export default Tick;
