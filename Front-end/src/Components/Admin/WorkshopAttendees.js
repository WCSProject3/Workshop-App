import React from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import AttendeesFilter from './WorkshopAttendeesSubComponents/AttendeesFilter';
import WorkshopInfo from './WorkshopAttendeesSubComponents/WorkshopInfo';

const WorkshopAttendees = ( props ) => {

    const workshopId = props.match.params.id;

    return ( 
        <div>
            <WorkshopInfo workshopId={workshopId}/>
            <AttendeesFilter role={props.role} />
            <AttendeesList workshopId={workshopId}/>
        </div>
    );
}
 
export default WorkshopAttendees;