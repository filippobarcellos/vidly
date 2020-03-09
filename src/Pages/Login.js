import React, { Component } from 'react';

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
          <div className="form-group">
            <label for="email">Email address</label>
            <input 
              onChange={this.handleChange}
              name="email"
              value={email} 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input 
              onChange={this.handleChange}
              name="password"
              value={password} 
              type="password" 
              class="form-control" 
              id="password" 
              placeholder="Password" 
            />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default Login;