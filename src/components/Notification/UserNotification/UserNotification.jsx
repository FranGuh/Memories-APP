import React from 'react';
import './UserNotification.css';

const UserNotification = ({sourceNotification,srcNotificationImg,altImageNotification,titleNotification,accionNotification,sourceTitleNotification,timeText}) => {
  return (
    <>
    <div className="UserNotification">
        <a href={sourceNotification}>
        <img className="UserNotification__userImg" src={srcNotificationImg} alt={altImageNotification} />
        <p className='UserNotification__userTitle__Text'><b>{titleNotification}</b>{accionNotification} <b>{sourceTitleNotification}</b></p>
        <p className='UserNotification__userTitle__Text'>{timeText}</p>
        <div className="btnNotification__accions">
            <button>Decline</button>
            <button>Accept</button>
        </div>
        </a>
    </div>
    
      
    </>
  )
}

export default UserNotification
