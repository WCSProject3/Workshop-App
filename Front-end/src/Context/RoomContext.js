import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RoomContext = createContext();

const RoomContextProvider = (props) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("dummyData.json")
      .then((response) => setRooms(response.data.room));
  }, []);

  const addRoom = (newObject) => {
    setRooms([
      ...rooms,
      {
        ...newObject,
      },
    ]);
  };

  return (
    <div>
      <RoomContext.Provider value={{ rooms, addRoom }}>
        {props.children}
      </RoomContext.Provider>
    </div>
  );
};

export default RoomContextProvider;
