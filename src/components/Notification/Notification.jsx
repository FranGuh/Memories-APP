import React from 'react'
import UserNotification from './UserNotification/UserNotification'
import './Notification.css';

const Notification = () => {
  return (
    <div className='Notification'>
      <UserNotification 
        sourceNotification="none"
        srcNotificationImg="/UserImg/UserIcon.jpg"
        altImageNotification="Una imagen del recuerdo My Dog 2025"
        titleNotification="My Dog 2025 "
        accionNotification="remember "
        sourceTitleNotification="Contact"
        timeText="36 mins ago"
      />
      <UserNotification 
        sourceNotification="none"
        srcNotificationImg="/UserImg/UserIcon.jpg"
        altImageNotification="Una imagen del recuerdo My Dog 2025"
        titleNotification="My Dog 2025 "
        accionNotification="remember "
        sourceTitleNotification="Contact"
        timeText="1 hour ago"
      />
      <UserNotification 
        sourceNotification="none"
        srcNotificationImg="/UserImg/UserIcon.jpg"
        altImageNotification="Una imagen del recuerdo My Dog 2025"
        titleNotification="My Dog 2025 "
        accionNotification="remember "
        sourceTitleNotification="Contact"
        timeText="24 hours and 36 mins ago"
      />
    </div>
  )
}

export default Notification