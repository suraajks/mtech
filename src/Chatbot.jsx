import React , { useEffect } from 'react';
import { Button , Spinner} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function App(props) {
const { inputChangeHandler , chatData , userInput, loading } = props;


  return (
    <div className="chat">
    <h1>Standard Mode</h1>
    {chatData.map((chat)=>{
        return(
            <div className='chatMessages'>
                <div className='chatMessageUser'>
                  <span>
                  <i className="bi bi-person-circle"></i>
                  <span dangerouslySetInnerHTML={{__html: chat.userInput}}/>
                  
                  </span>
                </div>
                <div className='chatMessageBot'>
                  <span>
                  <i className="bi bi-robot"></i>
                  <span dangerouslySetInnerHTML={{__html: chat.response}}/>
                   </span>
                </div>
            </div>
        )
    })}
          {loading && <div className='spinner'> <Spinner /> </div> }
    </div>
  );
}

export default App;
