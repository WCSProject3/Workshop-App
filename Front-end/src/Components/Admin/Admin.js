import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <AttendeeContextProvider>
        <WorkshopContextProvider>
          <RoomContextProvider>
            <NavBar />
            <Header />
            <Switch>
              <Route path="/" exact component={AllWorkshops} />
              <Route path="/new-workshop" component={NewWorkshop} />
              <Route path="/workshop-attendees" component={WorkshopAttendees} />
              {/*<Route path="/notifications-list" component={NotificationsList} />
              <Route path="/all-registrations" component={AllRegistrations} />*/}
            </Switch>
          </RoomContextProvider>
        </WorkshopContextProvider>
      </AttendeeContextProvider>
    </div>
   </BrowserRouter>
  );
};

export default Admin;