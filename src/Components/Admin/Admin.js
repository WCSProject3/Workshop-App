import React from "react";
import NewWorkshop from "./NewWorkshop";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import RoomContextProvider from "../../Context/RoomContext";

const Admin = () => {
  return (
    <div>
      <WorkshopContextProvider>
        <RoomContextProvider>
          <NewWorkshop />
        </RoomContextProvider>
      </WorkshopContextProvider>
    </div>
  );
};

export default Admin;
