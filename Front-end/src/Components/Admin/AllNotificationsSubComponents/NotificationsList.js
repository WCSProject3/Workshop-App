import React, { useContext } from 'react';
import { NotificationContext } from '../../../Context/NotificationContext';
import NotificationDetails from './NotificationDetails';
import './NotificationsList.scss'


const NotificationsList = () => {

    const { notifications } = useContext(NotificationContext);

    console.log(notifications)

        return ( 
            <table className="notifications-table">
                <colgroup>
                    <col className="date-col" />
                    <col className="content-col" />
                    <col className="to-col" />
                    <col className="state-col" />
                </colgroup>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Content</th>
                    <th>To</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {notifications.map(notification => {
                return <NotificationDetails 
                    notification={notification}
                    key={notification.id} 
                    {...notification} /> 
            })} 
            </tbody>
        </table>
        )
}
 
export default NotificationsList;