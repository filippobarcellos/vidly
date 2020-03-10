import React, { Component } from 'react';

import Input from '../Components/Common/input';

class Login extends Component {
  state = {
    account: {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const account = { ...this.state.account };
    account[event.target.name] = event.target.value;
    this.setState({ account });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>

          <Input 
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
          />

          <Input 
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default Login;