import React from 'react';
import NotificationsList from './AllNotificationsSubComponents/NotificationsList';
import { Link } from 'react-router-dom';

const AllNotifications = () => {
    return ( 
        <div>
            <button><Link to='/new-notification'>New Notification</Link></button>
            <NotificationsList />
        </div>
     );
}
 
export default AllNotifications;