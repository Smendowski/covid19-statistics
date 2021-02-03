import React from 'react';

class Newsletter extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {email:"", name:""},
      errors: {email:"", name:""}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
  
  
        alert('Thank you for subscribing to our Newsletter');
        const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json'
          },
          body: JSON.stringify({ 'email': this.state.input.email, 'subscriptions': (localStorage.getItem('country') ? localStorage.getItem('country') : 'Poland') })
        }

        fetch('http://g01.labagh.pl:4000/api/newsletter', requestOptions)
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h5>Coronavirus Newsletter - Subscribe to get more information!</h5>
        <form onSubmit={this.handleSubmit}>
  
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter name" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
  
          <div className="form-group">
            <label>Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter email" 
              id="email" />
   
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
             
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default Newsletter;