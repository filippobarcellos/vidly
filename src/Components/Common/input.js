import React from 'react';

// import { Container } from './styles';

export default function Input({ name, label, value, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input 
        onChange={onChange}
        name={name}
        value={value} 
        type={name} 
        className="form-control" 
        id={name}
      />
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
  );
}
