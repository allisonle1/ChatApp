import React, { useEffect, useState } from 'react';
import axios from 'axios';

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


  return (
    <div>
      <h1>Chat App</h1>
      <MessageContainer messageList={messageList} />
      <InputForm />
    </div>
  )
}

export default Home;
