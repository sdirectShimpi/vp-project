import React, { useEffect, useState } from 'react'
import { requestPermission,onMessageListener } from './Firebase'

const NotificationFairBase = () => {
const [notification, setNotification]= useState({title:"",body:""})

useEffect(() => {
    requestPermission()

    const unssuscribe = onMessageListener().then(payload=>{
        setNotification({
            title: payload?.notification?.title,
         body:payload?.notification?.body
        })

    })
  
}, [])

  return (
    <div>Notification</div>
  )
}

export default NotificationFairBase


