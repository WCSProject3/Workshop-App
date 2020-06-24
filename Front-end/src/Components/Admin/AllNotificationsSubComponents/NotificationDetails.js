import React from 'react';

const NotificationDetails = (notification) => {

    console.log(notification)

    const notificationDate = notification.date.substring(0, 10);
    const notificationHour = notification.date.substring(11, 16);

    return ( 
        <tr>
            <td>{`${notificationDate} ${notificationHour} `}</td>
            <td>{notification.content}</td>
            <td>{notification.role}</td>
            <td>{notification.state}</td>
        </tr>
     );
}
 
export default NotificationDetails;