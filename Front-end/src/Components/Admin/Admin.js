import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewWorkshop from "./NewWorkshop";
import NotificationContextProvider from "../../Context/NotificationContext";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import RoomContextProvider from "../../Context/RoomContext";
import AttendeeContextProvider from "../../Context/AttendeeContext";
import WorkshopAttendees from "./WorkshopAttendees";
import AllNotifications from "./AllNotifications";
import AllWorkshops from "./AllWorkshops";
import NavBar from "../SharedComponents/NavBar";
import NewNotification from "./NewNotification";

const Admin = () => {
  return (
    <BrowserRouter>
      <div>
        <NotificationContextProvider>
          <AttendeeContextProvider>
            <WorkshopContextProvider>
              <RoomContextProvider>
                <NavBar />
                <NewWorkshop />
                <WorkshopAttendees />
                <AllNotifications />
                <AllWorkshops />
                <NewNotification />
              </RoomContextProvider>
            </WorkshopContextProvider>
          </AttendeeContextProvider>
        </NotificationContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default Admin;