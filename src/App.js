
import { useEffect, useState } from 'react';
import { Button, FormControl,InputLabel,Input} from '@mui/material';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app'
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([{username: "jay", message: "Hi", }, {username : "qazi", message: "Whats up"}]);

  const [username, setUsername] = useState('');



  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data() })))
    })
  },[])


  useEffect(() => {

    setUsername(prompt("Please Entr your name"));

  },[])
  

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('1').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages, {username: username, message:input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome To the Chat</h1>
      <h2>Wellcome { username}</h2>
      <form>
        
      <FormControl>
        <InputLabel >Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage} >Send Message</Button>
      </FormControl>

      
      </form>
      <FlipMove>
      {
          messages.map((message,id ) => (

      <Message key={id} username={username}  message={message} />
          
        ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
