import React from 'react';
import NotificationsList from './AllNotificationsSubComponents/NotificationsList';
import { Link } from 'react-router-dom';
import './AllNotifications.scss'


const AllNotifications = () => {
    return ( 
        <div>
            <div className="all-notifications-header">
                <h1>All Notifications</h1>
                <button className="admin/new-notification-btn"><Link to='/new-notification'>New Notification</Link></button>
            </div>
            <div className="all-notifications-body">
                <NotificationsList />
            </div>
        </div>
     );
}
 
export default AllNotifications;