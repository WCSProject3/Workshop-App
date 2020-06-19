import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { WorkshopContext } from "../../../Context/WorkshopContext";
import { RoomContext } from "../../../Context/RoomContext";
import uuid from "react-uuid";

const WorkshopForm = () => {
  const { addTempWorkshop } = useContext(WorkshopContext);
  const { rooms } = useContext(RoomContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newObject = {
      id: uuid(),
      title: data.title,
      status_open: data.status,
      date: data.date,
      speaker: data.speaker,
      room: data.room,
    };
    addTempWorkshop(newObject);
    console.log(newObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="date" placeholder="date" name="date" ref={register} />
      <input type="text" placeholder="Title" name="title" ref={register} />
      <input type="text" placeholder="Speaker" name="speaker" ref={register} />
      <select name="room" ref={register}>
        {rooms.map((room) => {
          return (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Create" />
    </form>
  );
};

export default WorkshopForm;
