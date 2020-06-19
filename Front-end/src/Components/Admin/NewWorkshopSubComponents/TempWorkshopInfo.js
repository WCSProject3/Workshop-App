import React, { useContext, useState } from "react";
import { WorkshopContext } from "../../../Context/WorkshopContext";
import { RoomContext } from "../../../Context/RoomContext";
import { useForm } from "react-hook-form";

const TempWorkshopInfo = ({ tempWorkshop }) => {
  const { confirmWorkshop, editTempWorkshop } = useContext(WorkshopContext);
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
            <div>{tempWorkshop.room}</div>
            <button onClick={confirmWorkshop}>Confirm Workshop</button>
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
