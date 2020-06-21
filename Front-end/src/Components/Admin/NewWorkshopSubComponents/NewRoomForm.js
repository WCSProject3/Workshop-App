import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { RoomContext } from "../../../Context/RoomContext";
import uuid from "react-uuid";

const NewRoomForm = () => {
  const { addRoom } = useContext(RoomContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const roomTypeId = data.roomType === "Banquet" ? 1 : 2;
    const newObject = {
      name: data.name,
      status_open: data.status,
      capacity: data.capacity,
      room_manager: data.room_manager,
      room_type_id: roomTypeId,
    };
    console.log(newObject);
    addRoom(newObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" name="name" ref={register} />
      <select name="roomType" ref={register}>
        <option value="Banquet">Banquet</option>
        <option value="Classroom">Classroom</option>
      </select>
      <select name="capacity" ref={register}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      <select name="status" ref={register}>
        <option value="open">Open</option>
        <option value="close">Closed</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        name="description"
        ref={register}
      />
      <input
        type="text"
        placeholder="Room Manager"
        name="room_manager"
        ref={register}
      />
      <input type="submit" value="Create Room" />
    </form>
  );
};

export default NewRoomForm;
