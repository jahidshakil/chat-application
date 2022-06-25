
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState(["hi", "hello"]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  console.log(messages);
  return (
    <div className="App">
      <h1>Welcome To the Chat</h1>
      <form>
      <input value={input} onChange={event=>setInput(event.target.value)} />
      <button type='submit' onClick={sendMessage} >Send Message</button>
      </form>


      {
        messages.map((message => {
          return (
            <p>{message}</p>
          )
        
        }))
      }



    </div>
  );
}

export default App;
