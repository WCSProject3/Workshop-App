import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotificationContext = createContext();

const NotificationContextProvider = (props) => {
const [notifications, setNotifications] = useState([]);
const [tempNotifications, setTempNotifications] = useState([]);
const [allNotifications, setAllNotifications] = useState([]);

const addTempNotification = (newObject) => {
    console.log(newObject.id)
    setTempNotifications([
        ...tempNotifications, newObject 
    ]);
};

const confirmNotification = (newObject) => {
    setNotifications([
        ...notifications, newObject
    ]);
};

const confirmModification = (data) => {
    setNotifications([
        data
    ]);
};

const deleteNotification = (id) => {

    const deleteTempNotification = tempNotifications.filter(tempNotification => tempNotification.id !== id);

    setTempNotifications( deleteTempNotification );
    
};

const editNotification = (newObject) => {
    setNotifications([
        ...notifications, newObject
    ]);
};

useEffect(() => {
    axios
    .get("dummyData.json")
    .then((response) => setNotifications(response.data.notifications));
    axios
    .get("dummyData.json")
    .then((response) => setAllNotifications(response.data.notifications));
}, []);

return (
    <div>
    <NotificationContext.Provider
        value={{
        notifications,
        tempNotifications,
        addTempNotification,
        confirmNotification,
        allNotifications,
        deleteNotification,
        editNotification,
        confirmModification
        }}
    >
        {props.children}
    </NotificationContext.Provider>
    </div>
);
};
export default NotificationContextProvider;
