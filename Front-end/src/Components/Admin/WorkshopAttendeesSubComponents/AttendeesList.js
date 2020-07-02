import React, { useState, useEffect } from 'react';
import AttendeeDetails from './AttendeeDetails';
import axios from 'axios';


const AttendeeList = ( { workshopId } ) => {

    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        axios
            .get(`/workshops/${workshopId}/attendees/`)
            .then((response) => { setAttendees(response.data) }) 
    }, [workshopId]);

        return (
            <div>
                {attendees
                .map(attendee => {
                    return <AttendeeDetails 
                        key={attendee.id} 
                        {...attendee} /> 
                })} 
            </div>
        );
}

export default AttendeeList;