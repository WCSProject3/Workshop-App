import React from 'react';
import NotificationForm from "./NewNotificationSubComponents/NotificationForm";
import TempNotification from "./NewNotificationSubComponents/TempNotification";

const NewNotification = () => {
    return ( 
        <div>
            <TempNotification />
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