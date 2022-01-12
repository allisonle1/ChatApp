import React, {useState} from 'react';

<<<<<<< HEAD
const InputForm = () => {
=======
const InputForm = props => {
  const [message, setMessage] = useState("");

  const onMessageChange = (e) =>{
    setMessage(e.target.value)
  }

>>>>>>> 8eee2b6cdad9e5ff57ad33b244b3f35d96e38b6a
  return (
    <div>
      <form>
        <div>
          <label htmlFor="message"></label>
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
