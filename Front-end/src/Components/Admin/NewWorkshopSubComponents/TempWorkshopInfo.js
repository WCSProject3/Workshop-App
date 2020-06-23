import React, { useContext, useState } from "react";
import { WorkshopContext } from "../../../Context/WorkshopContext";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Context/UserContext";

const TempWorkshopInfo = ({ tempWorkshop }) => {
  const { confirmWorkshop, editTempWorkshop, deleteTempWorkshop } = useContext(WorkshopContext);
  const { speakers } = useContext(UserContext);

  const [editMode, setEditMode] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newObject = {
      title: data.title,
      status_open: data.status_open,
      date: data.date,
      description: data.description,
      speaker: data.speaker,
      room: data.room,
      room_capacity: data.room_capacity,
      room_manager: data.room_manager,
      room_type: data.room_type
    };
    editTempWorkshop(newObject);
    setEditMode(!editMode);
  };

  const handleConfirmWorkshop = () => {
    const speaker_id = speakers.filter(speaker => {
      return`${speaker.firstname} ${speaker.lastname}` === tempWorkshop.speaker
    })
    const room_type_id = tempWorkshop.room_type === "Banquet" ? 1 : 2;

    const newObject = {
      title: tempWorkshop.title,
      status_open: tempWorkshop.status_open,
      date: tempWorkshop.date,
      description: tempWorkshop.description,
      speaker_id: speaker_id[0].id,
      room: tempWorkshop.room,
      room_capacity: tempWorkshop.room_capacity,
      room_manager: tempWorkshop.room_manager,
      room_type_id: room_type_id
    };

    confirmWorkshop(newObject);
    deleteTempWorkshop(tempWorkshop.id)
  }

  console.log(tempWorkshop)

  return (
    <div>
        {!editMode && (
          <div className="temp-workshop-info">
            <div className="temp-workshop-info-header">
              <div>{tempWorkshop.date}</div>
              <div className="temp-workshop-info-header-btns">
                <button onClick={() => setEditMode(!editMode)}>Edit Workshop</button>
                <button onClick={() => deleteTempWorkshop(tempWorkshop.id)}>Delete Workshop</button>
              </div>
            </div>
            <div className="temp-workshop-info-body">
              <div className="temp-workshop-info-left">
                <h2>{tempWorkshop.title}</h2>
                <h4>{tempWorkshop.speaker}</h4>
                <p>{tempWorkshop.description}</p>
              </div>
              <div className="temp-workshop-info-right">
                <div className="room-room-manager">
                  <p className="room"><span>Room:</span> {tempWorkshop.room}</p>
                  <p><span>Room manager:</span> {tempWorkshop.room_manager}</p>
                </div>
                <p><span>Room setup:</span> {tempWorkshop.room_type}</p>
                <p><span>Room capacity:</span> {tempWorkshop.room_capacity}</p>
                <p className={tempWorkshop.status_open === "1" ? "open" : "closed"}><span>Registrations:</span> {tempWorkshop.status_open === "1" ? "OPEN": "CLOSED"}</p>
              </div>
            </div>
            <div className="temp-workshop-info-footer">
              <button onClick={handleConfirmWorkshop}>Confirm Workshop</button>
            </div>
          </div>
        )}
        {editMode && (
          <form className="new-workshop-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="new-workshop-form-header">
              <input
                type="datetime-local"
                placeholder="date"
                name="date"
                defaultValue={tempWorkshop.date}
                ref={register}
              />
            </div>
            <div className="new-workshop-form-body">
              <div className="new-workshop-form-left">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  defaultValue={tempWorkshop.title}
                  ref={register}
                />
                <select name="speaker" defaultValue={tempWorkshop.speaker} ref={register}>
                  {speakers.map(speaker => {
                    return <option value={`${speaker.firstname} ${speaker.lastname}`}>{`${speaker.firstname} ${speaker.lastname}`}</option>
                  })}
                </select>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  defaultValue={tempWorkshop.description}
                  ref={register}
                />
              </div>
              <div className="new-workshop-form-right">
                <input
                    type="text"
                    placeholder="Room"
                    name="room"
                    defaultValue={tempWorkshop.room}
                    ref={register}
                />
                <input
                    type="text"
                    placeholder="Room Manager"
                    name="room_manager"
                    defaultValue={tempWorkshop.room_manager}
                    ref={register}
                />
                <div className="new-workshop-form-selects">
                  <select defaultValue={tempWorkshop.room_type} name="room_type" ref={register}>
                    <option value="Banquet">Banquet</option>
                    <option value="Classroom">Classroom</option>
                  </select>
                  <select defaultValue={tempWorkshop.room_capacity} name="room_capacity" ref={register}>
                    <option value="10">10 pax</option>
                    <option value="20">20 pax</option>
                    <option value="30">30 pax</option>
                    <option value="40">40 pax</option>
                    <option value="50">50 pax</option>
                    <option value="60">60 pax</option>
                  </select>
                  <select defaultValue={tempWorkshop.status_open} name="status_open" ref={register}>
                    <option value="1">Open</option>
                    <option value="0">Closed</option>
                   </select>
                </div>
              </div>
            </div>
            <div className="new-workshop-form-footer">
              <button type="submit">Save</button>
            </div>
          </form>
        )}
    </div>
  );
};

export default TempWorkshopInfo;
