import React, { useContext, useState } from "react";
import { WorkshopContext } from "../../../Context/WorkshopContext";
import { RoomContext } from "../../../Context/RoomContext";
import { useForm } from "react-hook-form";
import { AttendeeContext } from "../../../Context/AttendeeContext";

const TempWorkshopInfo = ({ tempWorkshop }) => {
  const { confirmWorkshop, editTempWorkshop } = useContext(WorkshopContext);
  const { speakers } = useContext(AttendeeContext);
  const { rooms } = useContext(RoomContext);

  const [editMode, setEditMode] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newObject = {
      id: tempWorkshop.id,
      title: data.title,
      date: data.date,
      speaker: data.speaker,
      room: data.room,
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
  }

  console.log(tempWorkshop)

  return (
    <div>
      <fieldset>
        {!editMode && (
          <button onClick={() => setEditMode(!editMode)}>Edit Workshop</button>
        )}
        {!editMode && (
          <li>
            <div>{tempWorkshop.date}</div>
            <div>{tempWorkshop.title}</div>
            <div>{tempWorkshop.speaker}</div>
            <div>{tempWorkshop.description}</div>
            <div>{tempWorkshop.room}</div>
            <div>{tempWorkshop.room_manager}</div>
            <div>{tempWorkshop.room_type}</div>
            <div>{tempWorkshop.room_capacity}</div>
            <div>{tempWorkshop.status_open ? "open": "closed"}</div>
            <button onClick={handleConfirmWorkshop}>Confirm Workshop</button>
          </li>
        )}
        {editMode && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="date"
              placeholder="date"
              name="date"
              defaultValue={tempWorkshop.date}
              ref={register}
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              defaultValue={tempWorkshop.title}
              ref={register}
            />
            <input
              type="text"
              placeholder="Speaker"
              name="speaker"
              defaultValue={tempWorkshop.speaker}
              ref={register}
            />
            <select name="room" ref={register}>
              {rooms.map((room) => {
                return (
                  <option key={room.id} defaultValue={room.name}>
                    {room.name}
                  </option>
                );
              })}
            </select>
            <input type="submit" value="Edit" />
          </form>
        )}
      </fieldset>
    </div>
  );
};

export default TempWorkshopInfo;
