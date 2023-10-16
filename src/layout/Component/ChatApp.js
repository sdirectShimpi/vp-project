import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3010');

const ChatApp = ({ userName, room }) => {
    const baseUrl = process.env.REACT_APP_API_URL;
  const [message, setMessage] = useState('');
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    socket.emit('join-room', { userName, room });
  }, []);


  const sendMessage = () => {
        if (message !== '') {
          socket.emit('send-message', {
            message: message,
            room: room,
          });
          setMessage(''); 
        }
      };


//   const sendMessage = () => {
//     if (message !== '') {

    
//         axios.post(` http://localhost:3010/api/v1/sendChat`, {
//         sender: userName, 
//         receiver: room, 
//         message: message,
//       })
//         .then((response) => {
        
//           console.log('Message sent successfully');
//         })
//         .catch((error) => {
        
//           console.error('Error sending message:', error);
//         });

//       setMessage('');
//     }
//   };

 



const fetchChats = async () => {
  
    try {
        console.log("msgList",msgList)
      const response = await axios.get(`http://localhost:3010/api/v1/receive`);
      setMsgList(response.data);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

//   const sendMessage = () => {
//     if (message !== '') {
//       socket.emit('send-message', {
//         message: message,
//         room: room,
//       });
//       setMessage(''); 
//     }
//   };

  useEffect(() => {
    socket.on('receive-msg', (data) => {
     setMsgList((list) => [...list, data.message]);
    });
  }, []);

  return (
    <>
      <div className='chatPage'>
        <div className='chatContainer'>
          <div className='header'>Chat Header</div>
          <div className='chatBox'>
            {msgList.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>
          <div className='inputBox'>
            <div className='chat-body'></div>
            <input
              type='text'
              id='chatInput'
              placeholder='Enter message'
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
            <button onClick={sendMessage} className='sendbtn'>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatApp;







