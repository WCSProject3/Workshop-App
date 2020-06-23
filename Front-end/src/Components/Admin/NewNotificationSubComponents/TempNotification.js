import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { NotificationContext } from '../../../Context/NotificationContext';


const TempNotification = ( { tempNotification } ) => {

    const { confirmNotification, confirmModification, deleteNotification } = useContext(NotificationContext);
    const [ editToggle, setEditToggle ] = useState(false);
    const { register, handleSubmit } = useForm();

    const editMode = () => {
        console.log(editToggle)
        setEditToggle(!editToggle);
    }

    const onSubmit = (data) => {
        confirmModification(data);
        console.log("clicked")
        editMode();
    };

    return (
        <div>
            <li>
                <button onClick={() => editMode()}>Edit Notification</button>
                <div>{tempNotification.emails_users}</div>
                <div>{tempNotification.subject}</div>
                <div>{tempNotification.content}</div>
                <div>{tempNotification.date}</div>
                <button onClick={confirmNotification}>Confirm Notification</button>
                <button onClick={() => deleteNotification(tempNotification.id)}>Delete Notification</button>
            </li>
            {editToggle &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="emails_users" name="emails_users" defaultValue={tempNotification.emails_users} ref={register} />
                    <input type="text" placeholder="Subject" name="subject" defaultValue={tempNotification.subject} ref={register} />
                    <input type="text" placeholder="Content" name="content" defaultValue={tempNotification.content} ref={register} />
                    <input type="date" placeholder="Date" name="date" defaultValue={tempNotification.date} ref={register} />
                    <input type="submit" value="Save" />
                </form>
            }
        </div>
    )
}
 
export default TempNotification;