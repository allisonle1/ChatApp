import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import MessageContainer from '../containers/MessageContainer';
import InputForm from './InputForm';

const Home = () => {

  const [messageList, setMessageList] = useState([]);
  useEffect(() => {getMessages()}, []);

  const getMessages = () => {
    axios('http://localhost:3000/api')
    .then(response => {
      setMessageList(response.data);
      // console.log('message list', messageList);
    })
    .catch(err => {
      console.log(err)
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default of the event. in this case: button does not refresh page
    const messageId = uuidv4();
 
   axios.post('http://localhost:3000/api', {
      id: messageId, 
      user_id: 2, 
      message: e.target.value
    })
    setMessageList([...messageList, {
      id: messageId,
      user_id: 2,
      message: e.target.value
    }])
  }

  return (
    <div>
      <h1>Chat App</h1>
      <MessageContainer messageList={messageList} />
      <InputForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Home;
