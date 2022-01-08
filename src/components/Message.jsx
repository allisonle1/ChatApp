import React from 'react';

const Message = props => {

  return (
    <div>
      <div>{props.message}</div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default Message;