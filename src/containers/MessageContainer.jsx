import React from 'react';
import Message from '../components/Message';

const MessageContainer = props => {

    console.log('props', props.messageList)
    
    let messages = props.messageList.map(message => {
        console.log('youre inside map', message);
        <Message
          id={message.id}
          message={message.message}
          user_id={message.user_id}
        />
    })
    
    console.log(messages);

    return(
        <div id="messageContainer">
            {messages}
            <Message message={props.messageList}/>
        </div>
    )

    
}

export default MessageContainer;