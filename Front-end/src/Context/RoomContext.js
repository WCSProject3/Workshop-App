import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RoomContext = createContext();

const RoomContextProvider = (props) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
  }, []);

  {/*const getRooms = () => {
    axios
      .get("/rooms")
      .then((response) => response.data)
      .then((roomList) => {
        console.log(roomList)
        setRooms(roomList)
      });
  }*/}

  const addRoom = (newObject) => {
    console.log(newObject)
    
    {/*setRooms([
      ...rooms,
      {
        ...newObject,
      },
    ]);*/}
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
