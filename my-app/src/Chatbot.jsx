import React , { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function App(props) {
const { inputChangeHandler , chatData , userInput } = props;


  return (
    <div className="chat">
    <h1>Standard Mode</h1>
    {chatData.map((chat)=>{
        return(
            <div className='chatMessage'>
                <div>User Input: {chat.userInput}</div>
                <div>Chat response: {chat.response}</div>
            </div>
        )
    })}
    <input
     id="chat-input"
    className='inputStyle'
     value={userInput}
     placeholder='Please provide input' 
     onChange={inputChangeHandler}
    />
    </div>
  );
}

export default App;
