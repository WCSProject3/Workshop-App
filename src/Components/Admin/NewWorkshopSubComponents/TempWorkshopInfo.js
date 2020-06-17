import React, { useContext } from "react";
import { WorkshopContext } from "../../../Context/WorkshopContext";
import { RoomContext } from "../../../Context/RoomContext";

const TempWorkshopInfo = ({ tempWorkshop }) => {
  const {
    confirmWorkshop,
    editMode,
    setEditMode,
    tempHandleChange,
    editTempWorkshop,
  } = useContext(WorkshopContext);

  const { rooms } = useContext(RoomContext);
  return (
    <div>
      <fieldset>
        <button onClick={setEditMode}>
          {editMode ? "Close Edit" : "Edit User"}
        </button>
        <li>
          <div>{tempWorkshop.newObject.date}</div>
          <div>{tempWorkshop.newObject.title}</div>
          <div>{tempWorkshop.newObject.speaker}</div>
          <div>{tempWorkshop.newObject.room}</div>
          <button onClick={confirmWorkshop}>Confirm Workshop</button>
        </li>
        {editMode && (
          <form onSubmit={editTempWorkshop}>
            <input
              type="date"
              placeholder="date"
              name="date"
              value={tempWorkshop.newObject.date}
              onChange={tempHandleChange}
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={tempWorkshop.newObject.title}
              onChange={tempHandleChange}
            />
            <input
              type="text"
              placeholder="Speaker"
              name="speaker"
              value={tempWorkshop.newObject.speaker}
              onChange={tempHandleChange}
            />
            <select name="room" onChange={tempHandleChange}>
              {rooms.map((room) => {
                return (
                  <option key={room.id} value={room.name}>
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
