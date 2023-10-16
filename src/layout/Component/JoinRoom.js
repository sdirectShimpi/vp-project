import React, { useState } from 'react'

import { Link } from "react-router-dom"
import io from "socket.io-client";
import ChatApp from './ChatApp';



function JoinRoom() {
  
  const [userName, setUsername] = useState("");
  
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);


  const joinRoom = () => {
 
      setShowChat(true);
  };

  console.log(userName, room, "Join.js")

  return (
    <div className='joinPage'>
      {!showChat ? (
        <div className='joinContainer'>
            <h2>Chat Application</h2>
          <input onChange={(e) => setUsername(e.target.value)} value={userName} placeholder="Enter your Name" type="text" name="userName" id="joinInput" />
          <br></br>
          <input onChange={(e) => setRoom(e.target.value)} value={room} placeholder="room....." type="text" name="room" id="RoomInput" />
          <center>
             <button onClick={joinRoom} className='joinbtn'>Login in</button>
          </center>
        </div>
      ) : (
        <ChatApp userName={userName} room={room} />
      )}
    </div>
  )
}

export default JoinRoom

