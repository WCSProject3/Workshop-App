import React, { useContext }from 'react';
import { MdDelete, MdInfo } from 'react-icons/md';
import { NotificationContext } from '../../../Context/NotificationContext';


const NotificationDetails = ({notification, handleSelectedNotification, toggleDisplayModal}) => {

    console.log(notification)

    const notificationDate = notification.date.substring(0, 10);
    const notificationHour = notification.date.substring(11, 16);

    const { deleteNotification } = useContext(NotificationContext)

    const openModal = (notification) => {
        handleSelectedNotification(notification)
        toggleDisplayModal()
    }

    return ( 
        <tr>
            <td>{`${notificationDate} ${notificationHour} `}</td>
            <td>{notification.subject}</td>
            <td>{notification.send_to}</td>
            <td>{notification.state}</td>
            <td>
                <button className="notification-info-btn" onClick={() => openModal(notification)} ><MdInfo /></button>
                <button className="delete-notification-btn" onClick={() => deleteNotification(notification.id)}><MdDelete /></button>
            </td>
        </tr>
     );
}
 
export default NotificationDetails;