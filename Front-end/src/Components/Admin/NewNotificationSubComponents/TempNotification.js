import React, { useContext } from 'react';
import { NotificationContext } from '../../../Context/NotificationContext';

const TempNotification = ( { tempNotification } ) => {

    const { confirmNotification } = useContext(NotificationContext);

    

    return (
        <div>
            <li>
                <div>{tempNotification.users_emails}</div>
                <div>{tempNotification.subject}</div>
                <div>{tempNotification.content}</div>
                <div>{tempNotification.date}</div>
                <button onClick={confirmNotification}>Confirm Notification</button>
            </li>
        </div>
    )
}
 
export default TempNotification;