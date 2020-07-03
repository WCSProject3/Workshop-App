import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import UserContextProvider from "../../Context/UserContext";
import NavBar from '../SharedComponents/NavBar';
import Header from '../SharedComponents/Header';
import './Speaker.scss'
import Profile from "../SharedComponents/Profile";
import MyWorkshopAttendees from "../Speaker/MyWorkshopAttendees";

const Speaker = (props) => {
    return(
        <BrowserRouter>
        <UserContextProvider>
          <WorkshopContextProvider>
              <div className="page">
                <NavBar />
                <div className="body">
                  <Header />
                  <Switch>
                    <Route path={props.match.path} exact component={MyWorkshopAttendees} />
                    <Route path={`${props.match.path}/profile`} component={Profile} />
                  </Switch>
                </div>
              </div>
          </WorkshopContextProvider>
        </UserContextProvider>
     </BrowserRouter>
    )
}

export default Speaker
