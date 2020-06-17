import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewWorkshop from "./NewWorkshop";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import RoomContextProvider from "../../Context/RoomContext";
import AttendeeContextProvider from "../../Context/AttendeeContext";
import WorkshopAttendees from "./WorkshopAttendees";
import AllWorkshops from "./AllWorkshops";
import AllRegistrations from "./AllRegistrations";
import NotificationsList from "./NotificationsList";
import NavBar from "../SharedComponents/NavBar";

const Admin = () => {
  return (
    <BrowserRouter>
    <div>
      <AttendeeContextProvider>
        <WorkshopContextProvider>
          <RoomContextProvider>
            <NavBar />
            <Switch>
              <Route path="/" exact component={AllWorkshops} />
              <Route path="/new-workshop" component={NewWorkshop} />
              <Route path="/workshop-attendees" component={WorkshopAttendees} />
              <Route path="/notifications-list" component={NotificationsList} />
              <Route path="/all-registrations" component={AllRegistrations} />
            </Switch>
          </RoomContextProvider>
        </WorkshopContextProvider>
      </AttendeeContextProvider>
    </div>
   </BrowserRouter>
  );
};

export default Admin;