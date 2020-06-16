import React from "react";
import NewWorkshop from "./NewWorkshop";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import RoomContextProvider from "../../Context/RoomContext";
import AttendeeContextProvider from "../../Context/AttendeeContext";
import WorkshopAttendees from "./WorkshopAttendees";
import AllWorkshops from "./AllWorkshops";

const Admin = () => {
  return (
    <div>
      <AttendeeContextProvider>
        <WorkshopContextProvider>
          <RoomContextProvider>
            <NewWorkshop />
            <WorkshopAttendees />
            <AllWorkshops />
          </RoomContextProvider>
        </WorkshopContextProvider>
      </AttendeeContextProvider>
    </div>
  );
};

export default Admin;
