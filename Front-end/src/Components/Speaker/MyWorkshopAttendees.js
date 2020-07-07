import React, { useState, useContext, useEffect } from 'react';
import AttendeesList from '../Admin/WorkshopAttendeesSubComponents/AttendeesList';
import WorkshopInfo from '../Admin/WorkshopAttendeesSubComponents/WorkshopInfo';
import '../Admin/WorkshopAttendees.scss';
import { WorkshopContext } from '../../Context/WorkshopContext';


const MyWorkshopAttendees = ( ) => {

    const speakerId = 1;

    const { workshop, getWorkshop, getAttendees, attendees } = useContext(WorkshopContext);

    useEffect(() => {
        getWorkshop(speakerId);
        getAttendees(speakerId)
    }, [speakerId]);

    return ( 
        <div>
            <div className="workshop-attendees-header">
                <h1>Workshop Info</h1>
            </div>
            <div className="workshop-attendees-body" >
                <WorkshopInfo workshop={workshop}/>
                <AttendeesList attendees={attendees}/>
            </div>
        </div>
    );
}
 
export default MyWorkshopAttendees;