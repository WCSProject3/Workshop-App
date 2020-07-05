import React, { useState, useEffect } from 'react';
import WorkshopFormEdit from './WorkshopFormEdit';
import NewNotificationForm from './NewNotificationForm';
import NotificationInfo from '../Admin/AllNotificationsSubComponents/NotificationInfo'

const ModalForm = ( { workshopInEdit, toggleDisplayModal, active , attendees, notification} ) => {

    const [isActive, setIsActive] = useState("");

    useEffect(() => {
        switch(active){
            case "workshop":
                setIsActive("workshop")
                break;
            case "notification":
                setIsActive("notification")
                break;
            case "notificationInfo":
                setIsActive("notificationInfo")
            break;
        }
    },[active])

    return ( 
        <div className="workshop-edit-form">
            {isActive !== "" && isActive === "workshop" && 
            <WorkshopFormEdit 
            workshopInEdit={workshopInEdit}
            toggleDisplayModal={toggleDisplayModal}/>}
            {isActive !== "" && isActive === "notification" &&
            <NewNotificationForm send_to={workshopInEdit !== undefined ? workshopInEdit.title: `${attendees[0].firstname} ${attendees[0].lastname}`} attendees={attendees} toggleDisplayModal={toggleDisplayModal}/> }
            {isActive !== "" && isActive === "notificationInfo" &&
            <NotificationInfo notification={notification} toggleDisplayModal={toggleDisplayModal}/>}
        </div>
    );
}
 
export default ModalForm;