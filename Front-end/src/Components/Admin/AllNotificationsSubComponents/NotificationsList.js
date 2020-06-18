import React, { useContext } from 'react';
import { NotificationContext } from '../../../Context/NotificationContext';
import NotificationDetails from './NotificationDetails';

const NotificationsList = () => {

    const { notifications } = useContext(NotificationContext);

        return ( 
            <div>
            {notifications.map(notification => {
                return <NotificationDetails 
                    notification={notification}
                    key={notification.id} 
                    {...notification} /> 
            })} 
        </div>
         );
}
 
export default NotificationsList;