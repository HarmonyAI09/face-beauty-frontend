import React, { useState } from 'react';

const RoundedInput = ({ type, placeholder, alert, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value || ''); // Use value prop as initial state if available
  const [error, setError] = useState(' ');
  const [alertMessage, setAlertMessage] = useState('');

  const validateInput = () => {
    setError(' ');

    if (inputValue.trim() === '') {
      setError('Must be required.');
    } else {
      // Validation based on the input type
      switch (type) {
        case 'username':
          // Add custom username validation logic here
          break;
        case 'email':
          // Add custom email validation logic here
          break;
        case 'password':
          // Add custom password validation logic here
          break;
        default:
          break;
      }
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue); // Notify the parent about the value change
  };

  return (
    <div style={{marginBottom:"30px", position:"relative"}}>
      <input
        type={type === 'password' ? 'password' : 'text'}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => {
          validateInput();
          setAlertMessage(alert); // Show alert message on blur
        }}
        style={{
          borderRadius: '99px',
          padding: '10px',
          width: 'calc(100% - 24px)',
          backgroundColor: '#bbdefb',
          color: '#e3f2fd',
          borderColor: '#e3f2fd',
        }}
      />
      <div style={{ position:"absolute", left:"16px", top:"36px", visibility: error ? 'visible' : 'hidden', color: 'red' }}>{error}</div>
      <div style={{ paddingLeft:"10px", visibility: alertMessage ? 'visible' : 'hidden', color: 'orange' }}>{alertMessage}</div>
    </div>
  );
};

export default RoundedInput;
