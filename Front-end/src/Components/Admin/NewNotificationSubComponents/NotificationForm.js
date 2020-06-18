import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NotificationContext } from "../../../Context/NotificationContext";
import uuid from "react-uuid";

const NotificationForm = () => {
    const { addTempNotification } = useContext(NotificationContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const newObject = {
        id: uuid(),
        users_emails: data.users_emails,
        subject: data.subject,
        template: data.template,
        date: data.date
        };
        addTempNotification(newObject);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email" name="Email" ref={register} />
            <input type="text" placeholder="Subject" name="Subject" ref={register} />
            <input type="text" placeholder="Template" name="Template" ref={register} />
            <input type="date" placeholder="Date" name="Date" ref={register} />
            <input type="submit" value="Create" />
        </form>
    );
};

 
export default NotificationForm;
