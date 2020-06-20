import React from 'react';
import NotificationsList from './AllNotificationsSubComponents/NotificationsList';
import { Link } from 'react-router-dom';

const AllNotifications = () => {
    return ( 
        <div>
            <NotificationsList />
            <button><Link to='/new-notification'>New Notification</Link></button>
        </div>
     );
}
 
export default AllNotifications;