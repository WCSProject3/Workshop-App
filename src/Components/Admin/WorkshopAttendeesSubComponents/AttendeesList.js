import React, { useContext } from 'react';
import { attendeeContext } from '../../../Context/attendeeContext';
import AttendeeDetails from './attendeeDetails';


const attendeeList = () => {

    const { attendees } = useContext(attendeeContext);

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

export default attendeeList;