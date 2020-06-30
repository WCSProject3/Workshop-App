import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotificationContext = createContext();

const NotificationContextProvider = (props) => {
const [notifications, setNotifications] = useState([]);
const [tempNotifications, setTempNotifications] = useState([]);
const [allNotifications, setAllNotifications] = useState([]);

useEffect(() => {
    getNotifications();
}, []);

useEffect(() => {
}, [tempNotifications]);

const getNotifications = () => {
    axios
    .get("/notifications")
    .then((response) => response.data)
    .then((notificationsList) => {
        setNotifications(notificationsList)
        setAllNotifications(notificationsList)
    });
}

const addTempNotification = (newObject) => {
    setTempNotifications([...tempNotifications, newObject]);
};

const confirmNotification = (newObject) => {
    axios
    .post('/notifications', newObject)
    .then((response) => console.log(response))

    getNotifications();
};

const editNotification = (newObject) => {
    const notificationsList = [...tempNotifications];
    const i = notificationsList.findIndex((notification) => notification.id === newObject.id);
    notificationsList.splice(i, 1, newObject);
    setTempNotifications(notificationsList);
};

const deleteTempNotification = (id) => {
    const notificationList = tempNotifications.filter(notification => notification.id !== id)
    setTempNotifications(notificationList);
};

return (
    <div>
    <NotificationContext.Provider
        value={{
        notifications,
        tempNotifications,
        addTempNotification,
        confirmNotification,
        allNotifications,
        deleteTempNotification,
        editNotification,
        }}
    >
        {props.children}
    </NotificationContext.Provider>
    </div>
);
};
export default NotificationContextProvider;
