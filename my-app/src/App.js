import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatBot from './Chatbot';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
 const [userInput, setUserInput ] = useState('');
 const [chatData , setChatData] = useState([]);

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
    } catch (error) {
      console.error("Error in POST:", error);
    }
  };

  useEffect(() => {
    getData();
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
        <h1>MTECH Project chatbot</h1>
        <ChatBot 
          inputChangeHandler={inputChangeHandler}
          chatData={chatData}
         />
         <Button className ="buttonStyle
         " onClick={onSend}>Send</Button>
      </header>
    </div>
  );
}

export default App;
