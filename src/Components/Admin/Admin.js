import React from "react";
import WorkshopContextProvider from "../../Context/WorkshopContext";
import AttendeeContextProvider from "../../Context/AttendeeContext";
import WorkshopAttendees from './WorkshopAttendees';
import AllWorkshops from './AllWorkshops';

const Admin = () => {
return (
    <div>
        <AttendeeContextProvider>
        <WorkshopContextProvider>
            <WorkshopAttendees /> 
            <AllWorkshops /> 
        </WorkshopContextProvider>
        </AttendeeContextProvider>
    </div>
);
};
export default Admin;