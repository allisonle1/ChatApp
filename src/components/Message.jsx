import React from 'react';

const Message = props => {
  
  return (
    <div id={props.id} className='message'>
        {props.message}
        {/* <button>Edit</button> */}
        <button onClick={()=>{props.deleteMessage(props.id)}}>X</button>
    </div>
  )
}

export default Message;