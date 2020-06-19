import React from 'react';

const NotificationDetails = (notification) => {
    return ( 
        <div>
        <p>{notification.users_emails}</p>
        <p>{notification.subject}</p>
        <p>{notification.content}</p>
        <p>{notification.date}</p>
        </div>
     );
}
 
export default NotificationDetails;