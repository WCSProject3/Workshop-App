import React from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import WorkshopInfo from './WorkshopAttendeesSubComponents/WorkshopInfo';

const WorkshopAttendees = ( props ) => {

    const workshopId = props.match.params.id;

    return ( 
        <div>
            <WorkshopInfo workshopId={workshopId}/>
            <AttendeesList workshopId={workshopId}/>
        </div>
    );
}
 
export default WorkshopAttendees;