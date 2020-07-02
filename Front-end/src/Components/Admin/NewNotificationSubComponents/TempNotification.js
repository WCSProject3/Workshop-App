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

  const {
    editNotification,
    deleteTempNotification,
    confirmNotification,
  } = useContext(NotificationContext);
  const [editMode, setEditMode] = useState(false);

  const [checkboxCheck, setCheckboxCheck] = useState(false);

  const toggleSchedule = () => {
    setCheckboxCheck(!checkboxCheck);
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const now = new Date();

    const now_formated = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDay()}T${now.getHours()}:${now.getMinutes()}`;

    const date = data.checkbox ? data.date : now_formated;

    const state = data.checkbox ? "scheduled" : "send";

    const newObject = {
      to: data.to,
      subject: data.subject,
      content: data.content,
      state: state,
      date: date,
      checkbox: data.checkbox,
    };

    editNotification(newObject);
    handleEdit();
  };

  const handleEdit = () => {
    setEditMode(!editMode);
    setCheckboxCheck(tempNotification.checkbox);
  };

  const handleConfirmNotification = () => {
    let to_id = null;

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
              <button onClick={handleEdit}>Edit Notification</button>
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
          <div className="new-notification-form-header" />
          <div className="new-notification-form-body">
            <select
              name="to"
              defaultValue={tempNotification.to}
              ref={register({ required: true })}
            >
              <option value="">To:</option>
              <option value="All">All</option>
              <option value="All Attendees">All Attendees</option>
              <option value="All Speakers">All Speakers</option>
            </select>
            {errors.to && <p>please select an addressee</p>}
            <input
              style={errors.subject && { border: "1px solid #3B65B0" }}
              type="text"
              placeholder="Subject"
              name="subject"
              defaultValue={tempNotification.subject}
              ref={register({ required: true })}
            />
            {errors.subject && <p>please add a subject</p>}
            <textarea
              style={errors.content && { border: "1px solid #3B65B0" }}
              className="content"
              type="text"
              placeholder="Content"
              name="content"
              row="5"
              cols="50"
              defaultValue={tempNotification.content}
              ref={register({ required: true })}
            />
            {errors.content && <p>please add some content</p>}
            <div className="schedule">
              <label htmlFor="schedule">Schedule</label>
              <input
                type="checkbox"
                name="checkbox"
                id="schedule"
                defaultChecked={tempNotification.checkbox}
                value={checkboxCheck}
                onChange={toggleSchedule}
                ref={register}
              />
              {checkboxCheck && (
                <input
                  style={errors.date && { border: "1px solid #3B65B0" }}
                  type="datetime-local"
                  name="date"
                  defaultValue={tempNotification.date}
                  ref={register({ required: true })}
                />
              )}
              {errors.date && <p>please choose a date</p>}
            </div>
          </div>
          <div className="new-notification-form-footer">
            <button type="submit">Save</button>
          </div>
        </form>
      )}
      )
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
