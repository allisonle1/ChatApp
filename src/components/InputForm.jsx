import React, {useState} from 'react';
import axios from 'axios';



const InputForm = props => {
  const [message, setMessage] = useState("");

  const onMessageChange = (e) =>{
    setMessage(e.target.value)
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="message">Message</label>
          <textarea rows="5" cols="60" id="message" value={message} onChange={onMessageChange} placeholder="Write a new message here!"/>
        </div>
        <div>
          <button value={message} onClick={props.handleSubmit}>Send</button>
        </div>
      </form>
      <h4>State: {message}</h4>
    </div>
  )
}

export default InputForm;
