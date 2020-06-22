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
            to: data.to,
            subject: data.subject,
            content: data.content,
            state: data.state,
            date: data.date
            };
            reset({
                date: "",
                to:"All Attendees",
                subject:"",
                content:"",
                state:"sent"
            })
        addTempNotification(newObject);
    };

    return (
        <form className="new-notification-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="new-notification-form-header">
                <input type="date" placeholder="Date" name="date" ref={register} /> z
            </div>
            <div className="new-notification-form-body">
                <select name="to" ref={register}>
                    <option value="All Attendees">All Attendees</option>
                    <option value="All Speakers">All Speakers</option>
                </select>
                <input type="text" placeholder="Subject" name="subject" ref={register} />
                <input type="text" placeholder="Content" name="content" ref={register} />
                <select name="state" ref={register}>
                    <option value="sent">sent</option>
                    <option value="scheduled">scheduled</option>
                </select>
            </div>
            <div className="new-notification-form-footer">
                <button type="submit">Create</button>
            </div>
        </form>
    );
};

 
export default NotificationForm;
