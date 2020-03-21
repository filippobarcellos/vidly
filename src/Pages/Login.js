import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from '../Components/Common/input';

class Login extends Component {
  state = {
    account: {
      email: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    email: Joi.string().required().label('Email'),
    password: Joi.string().required().label('Password')
  };

  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    error.details.map(item => errors[item.path] = item.message);
    return errors;
  };

  validateInput = ({ name, value }) => {
    const input = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(input, schema)
    
    return error ? error.details[0].message : null;
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateInput(input);

    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  }

  handleSubmit = event => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
  }

  render() {
    const { account,errors } = this.state;
    
    return (
      <>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>

          <Input 
            name="email"
            value={account.email}
            label="Email"
            onChange={this.handleChange}
            error={errors.email}
          />

          <Input 
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button type="submit" className="btn btn-primary" disabled={this.validate()}>Login</button>
        </form>
      </>
    );
  }
}

export default Login;