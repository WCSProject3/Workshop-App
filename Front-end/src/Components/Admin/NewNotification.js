import React from 'react';
import NotificationForm from "./NewNotificationSubComponents/NotificationForm";
import TempNotification from "./NewNotificationSubComponents/TempNotification";
import { useContext } from 'react';
import { NotificationContext } from '../../Context/NotificationContext';
import { Link } from 'react-router-dom';
import './NewNotification.scss'


const NewNotification = () => {

    const { tempNotifications } = useContext(NotificationContext);

    return ( 
        <div className="new-notifications-body">
            <div className="new-notifications-header">
                <h1>New Notification</h1>
                <button className="all-notifications-btn"><Link to='/all-notifications'>All Notifications</Link></button>
                <button className="confirm-all-btn">Confirm All</button>
            </div>
            {tempNotifications.map(tempNotification => {
                return (
                    <TempNotification 
                        key={tempNotification.id}
                        tempNotification={tempNotification}
                    />)
            })}
            <NotificationForm />
        </div>
     );
}
 
export default NewNotification;


// add: send now or send later
//action should be done before confirm stage
//action will be done when confirming
//either store the notification or send the email
//needs to be talked about with Connor