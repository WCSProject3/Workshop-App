import React, { useState, useContext, useEffect } from 'react';
import AttendeesList from '../Admin/WorkshopAttendeesSubComponents/AttendeesList';
import WorkshopInfo from '../Admin/WorkshopAttendeesSubComponents/WorkshopInfo';
import { WorkshopContext } from '../../Context/WorkshopContext';
import '../Admin/WorkshopAttendees.scss';


const MyWorkshopAttendees = ( ) => {

    const speakerId = 6;

    const { workshop, getWorkshop, attendees, getAttendees } = useContext(WorkshopContext);

    console.log("WORKSHOP WORKSHOP WORKSHOP",  )


   // useEffect(() => {
   //     getWorkshop(speakerId);
   //     getAttendees(speakerId)
   // }, []);
//
    console.log('myAttendeesList', attendees)
    console.log('workshopspeaker', workshop)

    
    return ( 
        <div>
            <div className="workshop-attendees-header">
                <h1>Workshop Info</h1>
            </div>
            <div className="workshop-attendees-body" >
                <WorkshopInfo workshop={workshop} />
                <AttendeesList attendees={attendees} />
            </div>
        </div>
    );
}
 
export default MyWorkshopAttendees;