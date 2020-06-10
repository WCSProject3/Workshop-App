import React from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import AttendeesFilters from './WorkshopAttendeesSubComponents/AttendeesFilters';

const WorkshopAttendees = (role) => {
    return ( 
        <div>
            <AttendeesFilters role={role} />
            <AttendeesList /> 
        </div>
    );
}
 
export default WorkshopAttendees;