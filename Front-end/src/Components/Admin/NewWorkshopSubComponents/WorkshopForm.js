import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { WorkshopContext } from "../../../Context/WorkshopContext";
import { RoomContext } from "../../../Context/RoomContext";
import uuid from "react-uuid";
import { AttendeeContext } from "../../../Context/AttendeeContext";

const WorkshopForm = () => {
  const { addTempWorkshop } = useContext(WorkshopContext);
  const { speakers } = useContext(AttendeeContext);
  const { rooms } = useContext(RoomContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
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
    addTempWorkshop(newObject);
    console.log(newObject);
  };

  console.log(speakers)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="date" placeholder="date" name="date" ref={register} />
      <input type="text" placeholder="Title" name="title" ref={register} />
      <select name="speaker" ref={register}>
        {speakers.map(speaker => {
          return <option value={`${speaker.firstname} ${speaker.lastname}`}>{`${speaker.firstname} ${speaker.lastname}`}</option>
        })}
      </select>
      <input type="text" placeholder="Description" name="description" ref={register} />
      <input type="text" placeholder="Room" name="room" ref={register} />
      <input type="text" placeholder="Room Manager" name="room_manager" ref={register} />
      <select name="room_type" ref={register}>
            <option value="Banquet">Banquet</option>
            <option value="Classroom">Classroom</option>
      </select>
      <select name="room_capacity" ref={register}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
      </select>
      <select name="status_open" ref={register}>
            <option value="1">Open</option>
            <option value="0">Closed</option>
      </select>
      <input type="submit" value="Create" />
    </form>
  );
};

export default WorkshopForm;
