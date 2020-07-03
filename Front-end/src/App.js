import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Speaker from "./Components/Speaker/Speaker";
import Ateendee from "./Components/Attendee/Attendee";
import Login from './Components/SharedComponents/Login'
import SignUp from './Components/SharedComponents/SignUp'
import { UserContext } from './Context/UserContext'
import { WorkshopContext } from './Context/WorkshopContext'
import UserContextProvider from './Context/UserContext'

function App() {

  const { user, getUser } = useContext(UserContext)
  const { userWorkshops, getUserWorkshops } = useContext(WorkshopContext)

  useEffect(() => {
    getUser(3)
    getUserWorkshops(3)
  }, [])

  console.log(userWorkshops)
  
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/admin" component={Admin} />
        <Route path="/speaker" component={Speaker} />
        <Route path="/ateendee" component={Ateendee} />
      </Switch>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
