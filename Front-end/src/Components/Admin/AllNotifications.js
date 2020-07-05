import React, { useContext, useState } from 'react';
import NotificationsList from './AllNotificationsSubComponents/NotificationsList';
import Filters from '../SharedComponents/Filters'
import { Link } from 'react-router-dom';
import './AllNotifications.scss'
import { NotificationContext } from '../../Context/NotificationContext';
import ModalForm from '../SharedComponents/ModalForm';


const AllNotifications = () => {

    const { notifications, handleFilterState, stateFilter, handleNotificationSearch, searchNotificationValue } = useContext(NotificationContext)

    const [displayModal, setDisplayModal] = useState(false);
    const [notification, setNotification] = useState(false);

    const toggleDisplayModal = () => {
        setDisplayModal(!displayModal)
    }

    const handleSelectedNotification = (selectedNotification) => {
        setNotification(selectedNotification)
    }


    const state = [{ state: "scheduled" }, { state: "sent"} ]
    return ( 
        <div>
            <div className="all-notifications-header">
                <h1>All Notifications</h1>
                <button className="admin/new-notification-btn"><Link to='/admin/new-notification'>New Notification</Link></button>
            </div>
            {displayModal && <ModalForm active="notificationInfo" toggleDisplayModal={toggleDisplayModal} notification={notification} />}
            <div className="all-notifications-body">
                <Filters handleSearch={handleNotificationSearch} seachValue={searchNotificationValue} optionsList={state} handleOption={handleFilterState} defaultOption="All notifications" optionKey="state" optionValue={stateFilter} />
                <NotificationsList notifications={notifications} handleSelectedNotification={handleSelectedNotification} toggleDisplayModal={toggleDisplayModal} />
            </div>
        </div>
     );
}
 
export default AllNotifications;