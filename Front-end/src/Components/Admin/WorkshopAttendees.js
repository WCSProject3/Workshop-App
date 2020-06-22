import React from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import AttendeesFilter from './WorkshopAttendeesSubComponents/AttendeesFilter';
import WorkshopInfo from './WorkshopAttendeesSubComponents/WorkshopInfo';

const WorkshopAttendees = (role) => {

    return ( 
        <div>
            <WorkshopInfo />
            <AttendeesFilter role={role} />
            <AttendeesList /> 
        </div>
    );
}
 
export default WorkshopAttendees;