import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotificationContext = createContext();

const NotificationContextProvider = (props) => {
const [notifications, setNotifications] = useState([]);
const [tempNotifications, setTempNotifications] = useState([]);
const [allNotifications, setAllNotifications] = useState([]);

const addTempNotification = (newObject) => {
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
    setTempNotifications([
        data
    ]);
};

const deleteNotification = (id) => {
    setTempNotifications([
            notifications.filter(notification => notification.id !== id)
    ]);
    
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
