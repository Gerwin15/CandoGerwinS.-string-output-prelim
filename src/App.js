import React from 'react';
import MyName from './MyName';

function App() {
  // Inline style objects
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#FAFFAF',
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: 'auto'
  };

  const heading1Style = {
    color: '#3FA2F6',
    fontSize: '2.5rem',
    marginBottom: '20px'
  };

  const heading2Style = {
    color: '#FC4100',
    fontSize: '1.5rem',
    marginTop: '20px'
  };

  const componentStyle = {
    backgroundColor: '#9DBDFF',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px'
  };

  return (
    <div style={appStyle}>
      <div style={componentStyle}>
        <MyName />
      </div>
    </div>
  );
}

export default App;
