import React , { useEffect, useState } from 'react';
import axios from 'axios';
import ChatBot from './Chatbot';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
 const [userInput, setUserInput ] = useState('');

  const  getData = async() => {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  const sendData = async() => {
    try {
      const response = await axios({
        method: 'post',
        url: '/user/12345',
        data: userInput,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  

  useEffect(()=>{
    getData();
  },[]);

  const inputChangeHandler = (e) =>{
    setUserInput(e.target.value)

  }

  const onSend =()=>{
    sendData();

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>MTECH Project chatbot</h1>
        <ChatBot 
          inputChangeHandler={inputChangeHandler}
         />
         <Button className ="buttonStyle" onClick={onSend}>Send</Button>
      </header>
    </div>
  );
}

export default App;
