import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NotificationContext } from "../../../Context/NotificationContext";
import Modal from "../Modals/Modal";

const TempNotification = ({ tempNotification, toggleMessageModal }) => {
  const {
    editNotification,
    deleteTempNotification,
    confirmNotification,
  } = useContext(NotificationContext);
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit } = useForm();
  const [isModalDisplayed, setModalVisibility] = useState(false);

  const onSubmit = (data) => {
    editNotification(data);
    setEditMode(!editMode);
  };

  const toggleModal = () => {
    setModalVisibility(!isModalDisplayed);
  };

  const handleConfirmNotification = () => {
    let to_id = null;

    switch (tempNotification.to) {
      case "All":
        to_id = 1;
        break;
      case "All Attendees":
        to_id = 2;
        break;
      case "All Speakers":
        to_id = 3;
        break;
    }

    const newObject = {
      subject: tempNotification.subject,
      content: tempNotification.content,
      state: tempNotification.state,
      send_to_id: to_id,
      date: tempNotification.date,
    };

    confirmNotification(newObject);
    toggleMessageModal();
    deleteTempNotification(tempNotification.id);
  };

  console.log(tempNotification);

  return (
    <div>
      {isModalDisplayed && (
        <Modal
          closeModal={toggleModal}
          content="Do you want to delete this Notification?"
          confirmText="Confirm"
          confirmFunction={() => deleteTempNotification(tempNotification.id)}
        />
      )}
      {!editMode && (
        <div className="temp-notification-info">
          <div className="temp-notification-info-header">
            <div>{tempNotification.date}</div>
            <div className="temp-notification-info-header-btns">
              <button onClick={() => setEditMode(!editMode)}>
                Edit Notification
              </button>
              <button onClick={toggleModal}>Delete Notification</button>
            </div>
          </div>
          <div className="temp-notification-info-body">
            <div>
              <span>To:</span> {tempNotification.to}
            </div>
            <div>
              <span>Subject :</span>
              {tempNotification.subject}
            </div>
            <div>
              <span>Content: </span>
              {tempNotification.content}
            </div>
            <div>
              <span>State: </span>
              {tempNotification.state}
            </div>
          </div>
          <div className="temp-notification-info-footer">
            <button onClick={handleConfirmNotification}>
              Confirm Notification
            </button>
          </div>
        </div>
      )}
      {editMode && (
        <form
          className="new-notification-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="new-notification-form-header">
            <input
              type="date"
              placeholder="Date"
              name="date"
              defaultValue={tempNotification.date}
              ref={register}
            />
          </div>
          <div className="new-notification-form-body">
            <select name="to" defaultValue={tempNotification.to} ref={register}>
              <option value="All">All</option>
              <option value="All Attendees">All Attendees</option>
              <option value="All Speakers">All Speakers</option>
            </select>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              defaultValue={tempNotification.subject}
              ref={register}
            />
            <input
              type="text"
              placeholder="Content"
              name="content"
              defaultValue={tempNotification.content}
              ref={register}
            />
            <select
              name="state"
              defaultValue={tempNotification.state}
              ref={register}
            >
              <option value="sent">sent</option>
              <option value="scheduled">scheduled</option>
            </select>
          </div>
          <div className="new-notification-form-footer">
            <button type="submit">Save</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TempNotification;
