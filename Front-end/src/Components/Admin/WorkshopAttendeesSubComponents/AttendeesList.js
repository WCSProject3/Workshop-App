import React, { useContext } from 'react';
import { AttendeeContext } from '../../../Context/AttendeeContext';
import AttendeeDetails from './AttendeeDetails';


const AttendeeList = () => {

    const { attendees } = useContext(AttendeeContext);

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