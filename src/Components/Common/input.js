import React from 'react';

// import { Container } from './styles';

export default function Input({ name, label, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlfor={name}>{label}</label>
      <input 
        onChange={onChange}
        name={name}
        value={value} 
        type={name} 
        className="form-control" 
        id={name}
      />
  </div>
  );
}
