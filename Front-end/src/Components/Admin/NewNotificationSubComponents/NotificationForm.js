import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NotificationContext } from "../../../Context/NotificationContext";
import uuid from "react-uuid";

const NotificationForm = () => {
    const { addTempNotification } = useContext(NotificationContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        const newObject = {
            id: uuid(),
            emails_users: data.emails_users,
            subject: data.subject,
            content: data.content,
            date: data.date
            };
        addTempNotification(newObject);
        reset({
            emails_users: "",
            subject: "",
            content: "",
            date: ""
        });

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="emails_users" name="emails_users" ref={register} />
            <input type="text" placeholder="Subject" name="subject" ref={register} />
            <input type="text" placeholder="Content" name="content" ref={register} />
            <input type="date" placeholder="Date" name="date" ref={register} />
            <input type="submit" value="Create" />
        </form>
    );
};

 
export default NotificationForm;
