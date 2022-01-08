import React from 'react'


const InputForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="message">Message</label>
          <textarea rows="5" cols="60" id="message" defaultValue="Write some comments here!"/>
        </div>
        <div>
          <input type="button" value="Send"/>
        </div>
      </form>
    </div>
  )
}

export default InputForm;
