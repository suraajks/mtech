import React , { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function App(props) {
const { inputChangeHandler } = props;


  return (
    <div className="chat">
    <h1>Standard Mode</h1>
    <input
     id="chat-input"
    className='inputStyle'
     placeholder='Please provide input' 
     onChange={inputChangeHandler}
    />
    </div>
  );
}

export default App;
