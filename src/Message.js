import { Card, CardContent} from '@mui/material'
import React, {forwardRef} from 'react'
import './Message.css'

 const Message=forwardRef(({ message, username }, ref)=>  {
       
       const isUser = username === message.username;
    
    return (
        <div ref={ref} className={`message ${isUser && 'messageUser'}`}>
            <Card className= {isUser ? 'messageUserCard' : 'messageGuestCard'}>
          <CardContent>
                  <h2>{message.username} :{message.message}</h2>
             
              </CardContent>
          </Card>
      </div>

          
    
  )
})

export default Message