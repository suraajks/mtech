import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatBot from './Chatbot';
import { Button , Spinner} from 'react-bootstrap';
import './App.css';

function App() {
 const [userInput, setUserInput ] = useState('');
 const [chatData , setChatData] = useState([]);
 const [loading , setIsLoading] = useState(false);

  // Test GET request (optional, remove if not needed)
  const getData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/'); 
      console.log("GET response:", response.data);
    } catch (error) {
      console.error("Error in GET:", error);
    }
  };

  // Send user input to FastAPI backend
  const sendData = async () => {
    setIsLoading(true)
    try {
      const data = await axios.post('http://127.0.0.1:8000/query', {
        prompt: userInput   // ✅ must match backend key
      });
      console.log('>>data',data)
      const id = chatData.length + 1;
      const chatObj = {
        chatId: id,
        userInput: userInput,
        response: data.data.response
      }
      const updatedChatData = [
        ...chatData,
        {
          ...chatObj
        }
      ]
      setChatData(updatedChatData);
      setUserInput('');
      setIsLoading(false)
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Optional: for smooth scrolling animation
      });
    } catch (error) {
      // const id = chatData.length + 1;
      // const chatObj = {
      //   chatId: id,
      //   userInput: userInput,
      //   response: 'sample'
      // }
      // const updatedChatData = [
      //   ...chatData,
      //   {
      //     ...chatObj
      //   }
      // ]
      // setChatData(updatedChatData);
      // setUserInput('');
      // setUserInput('');
      console.error("Error in POST:", error);
      setIsLoading(false)
      // window.scrollTo({
      //   top: document.body.scrollHeight,
      //   behavior: 'smooth' // Optional: for smooth scrolling animation
      // });
    }
  };

  useEffect(() => {
    getData();
    window.scrollTo({
      top: 0,
      left: 0, // Optional: scrolls to the far left
      behavior: 'smooth' // Optional: provides a smooth scrolling animation
    });
  }, []);

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const onSend = () => {
    sendData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header'>Conversational AI agent</h1>
        <ChatBot 
          inputChangeHandler={inputChangeHandler}
          chatData={chatData}
          userInput={userInput}
          loading={loading}
         />
         <div className='footer'>
         <input
            id="chat-input"
            className='inputStyle'
            value={userInput}
            placeholder='Please provide input' 
            onChange={inputChangeHandler}
         />
        <Button className ="buttonStyle" onClick={onSend}>Send</Button>
         </div>
        
      </header>
    </div>
  );
}

export default App;
