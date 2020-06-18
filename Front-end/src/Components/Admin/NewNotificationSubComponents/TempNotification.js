import React, { useContext } from 'react';
import { NotificationContext } from '../../../Context/NotificationContext';

const TempNotification = ({ tempNotification }) => {
    const { confirmNotification } = useContext(NotificationContext);
    return (
        <li>
        <div>{tempNotification.newObject.email}</div>
        <div>{tempNotification.newObject.subject}</div>
        <div>{tempNotification.newObject.template}</div>
        <div>{tempNotification.newObject.date}</div>

        <button onClick={confirmNotification}>Confirm Notification</button>
        </li>
    )
}
 
export default TempNotification;