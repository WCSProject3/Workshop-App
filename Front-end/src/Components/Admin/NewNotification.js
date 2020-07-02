import React from "react";
import NotificationForm from "./NewNotificationSubComponents/NotificationForm";
import TempNotification from "./NewNotificationSubComponents/TempNotification";
import { useContext, useState } from "react";
import { NotificationContext } from "../../Context/NotificationContext";
import { Link } from "react-router-dom";
import "./NewNotification.scss";
import MessageModal from "./Modals/MessageModal";

const NewNotification = () => {
  const { tempNotifications } = useContext(NotificationContext);
  const [isMessageModalDisplayed, setMessageModalVisibility] = useState(false);

  const toggleMessageModal = () => {
    setMessageModalVisibility(true);
    setTimeout(() => setMessageModalVisibility(false), 5000);
    console.log("ITS WORKING");
  };

  return (
    <div className="new-notifications-body">
      <div className="new-notifications-header">
        <h1>New Notification</h1>
        <button className="all-notifications-btn">
          <Link to="/all-notifications">All Notifications</Link>
        </button>
        <button className="confirm-all-btn">Confirm All</button>
      </div>
      <div>
        {isMessageModalDisplayed && (
          <MessageModal content="Your Notification was successfully added" />
        )}
      </div>
      {tempNotifications.map((tempNotification) => {
        return (
          <TempNotification
            key={tempNotification.id}
            tempNotification={tempNotification}
            toggleMessageModal={toggleMessageModal}
          />
        );
      })}
      <NotificationForm />
    </div>
  );
};

export default NewNotification;

// add: send now or send later
//action should be done before confirm stage
//action will be done when confirming
//either store the notification or send the email
//needs to be talked about with Connor
