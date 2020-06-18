import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewWorkshop from "./NewWorkshop";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import RoomContextProvider from "../../Context/RoomContext";
import AttendeeContextProvider from "../../Context/AttendeeContext";
import WorkshopAttendees from "./WorkshopAttendees";
import AllWorkshops from "./AllWorkshops";
import NavBar from "../SharedComponents/NavBar";

const Admin = () => {
  return (
    <BrowserRouter>
    <div>
      <AttendeeContextProvider>
        <WorkshopContextProvider>
          <RoomContextProvider>
            <NavBar />
            <NewWorkshop />
            <WorkshopAttendees />
            <AllWorkshops />
          </RoomContextProvider>
        </WorkshopContextProvider>
      </AttendeeContextProvider>
    </div>
   </BrowserRouter>
  );
};

export default Admin;