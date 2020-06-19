import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { NotificationContext } from '../../../Context/NotificationContext';
import uuid from "react-uuid";


const TempNotification = ( { tempNotification } ) => {

    const { confirmNotification } = useContext(NotificationContext);
    const { confirmModification } = useContext(NotificationContext);
    const { deleteNotification } = useContext(NotificationContext);
    const [ editToggle, setEditToggle ] = useState(false);
    const { register, handleSubmit } = useForm();

    const editMode = () => {
        setEditToggle(!editToggle);
    }

    const onSubmit = (data) => {
        confirmModification(data);
    };

    return (
        <div>
            <li>
                <button onClick={() => editMode()}>Edit Notification</button>
                <div>{tempNotification.users_emails}</div>
                <div>{tempNotification.subject}</div>
                <div>{tempNotification.content}</div>
                <div>{tempNotification.date}</div>
                <button onClick={confirmNotification}>Confirm Notification</button>
                <button onClick={() => deleteNotification(tempNotification.id)}>Delete Notification</button>
            </li>
            {editToggle &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email" name="emails_users" defaultValue={tempNotification.emails_users} ref={register} />
                    <input type="text" placeholder="Subject" name="subject" ref={register} />
                    <input type="text" placeholder="Content" name="content" ref={register} />
                    <input type="date" placeholder="Date" name="date" ref={register} />
                    <input type="submit" value="Save" />
                </form>
            }
        </div>
    )
}
 
export default TempNotification;