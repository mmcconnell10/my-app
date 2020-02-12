import React from 'react';



class Card extends React.Component{

	render(){
		return(
			<div className="card">
              <div className="card-header">
              	{this.props.header}
              </div>
              <div className="card-body">
              	{this.props.body}
              </div>
              <div className="card-footer">
              	{this.props.footer}
              </div>
             </div>

			);
	}


}
export default Card;