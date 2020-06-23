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
import './Admin.scss'
import Profile from "../SharedComponents/Profile";

const Admin = () => {
  return (
    <BrowserRouter>
      <AttendeeContextProvider>
        <WorkshopContextProvider>
          <RoomContextProvider>
            <NotificationContextProvider>
              <div className="page">
                <NavBar />
                <div className="body">
                  <Header />
                  <Switch>
                    <Route path="/" exact component={AllWorkshops} />
                    <Route path="/new-workshop" component={NewWorkshop} />
                    <Route path="/workshop-attendees/:id" component={WorkshopAttendees} />
                    <Route path="/all-notifications" component={AllNotifications} />
                    <Route path="/new-notification" component={NewNotification} />
                    <Route path="/profile" component={Profile} />
                    {/*<Route path="/notifications-list" component={NotificationsList} />
                    <Route path="/all-registrations" component={AllRegistrations} />*/}
                  </Switch>
                </div>
              </div>
            </NotificationContextProvider>
          </RoomContextProvider>
        </WorkshopContextProvider>
      </AttendeeContextProvider>
   </BrowserRouter>
  );
};

export default Admin;