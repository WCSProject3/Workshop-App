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
import NewNotification from "./NewNotification";
import NavBar from '../SharedComponents/NavBar';
import Header from '../SharedComponents/Header';

const Admin = () => {
  return (
    <BrowserRouter>
      <div>
        <NotificationContextProvider>
          <AttendeeContextProvider>
            <WorkshopContextProvider>
              <RoomContextProvider>
                <Header />
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