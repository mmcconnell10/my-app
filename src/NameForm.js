import React from 'react';
import Card from './Card';



class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	name: '',
    	flavor: 'Grapefruit',
      submitted: false
    };
     this.submitted = {
       name: '',
       flavor: ''
     }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event) {
  	const name = event.target.name;
  	const value = event.target.value
  	this.setState({
  		[name]: value
  	});
  }

  handleClick(event){
    this.setState({
      submitted: false,
      name: '',
      flavor: ''
    })
  }

  handleSubmit(event) {
    this.setState({
      submitted : true
    });
    this.submitted.name = this.state.name;
    this.submitted.flavor = this.state.flavor;
    event.preventDefault();
  } 

  render() {
    let formSubmit = '';
    
    if(this.state.submitted){
      let header = <h1><strong>You submitted the form!</strong></h1>;
      let body = <div>
                <strong>Your Name:</strong> {this.submitted.name}<br></br>
                <strong>Your Favorite flavor:</strong> {this.submitted.flavor}
               </div>;
      let footer = <button className="btn btn-secondary" onClick={this.handleClick}>Reset Form</button>;
      formSubmit = 
        <Card header={header} body={body} footer={footer}/>
      }
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <h1>This is my first React Form! YAY</h1>
        <label>
          Name:
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
        </label><br></br>
        <label>
          Pick your favorite flavor:
          <select name='flavor' value={this.state.flavor} onChange={this.handleChange}>
            <option value="grapefruit" >Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label><br></br>
        <button className="btn btn-secondary" type="submit" value="Submit">Submit</button>
      </form>
      {formSubmit}
      </div>
    );
  }
}

export default NameForm;
