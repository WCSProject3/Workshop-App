import React from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import AttendeesFilter from './WorkshopAttendeesSubComponents/AttendeesFilter';

const WorkshopAttendees = (role) => {
    return ( 
        <div>
            <AttendeesFilter role={role} />
            <AttendeesList /> 
        </div>
    );
}
 
export default WorkshopAttendees;