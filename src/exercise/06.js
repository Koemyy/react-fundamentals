// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react';

function UsernameForm({onSubmitUsername}) {
    const [username, setUsername] = useState(null)
    const refContainer = useRef(null);
    function handleSubmit() {
        onSubmitUsername = refContainer.current;
        alert(onSubmitUsername)
    }

    function handleChange(event) {
        const {value} = event.target
        setUsername(value.toLowerCase())
    }

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="labelId">Username:</label>
        <input onChange={handleChange} id="labelId" type="text" />
      </div>
        <div style={{color: 'green', fontSize:'20px'}}>{username}</div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
