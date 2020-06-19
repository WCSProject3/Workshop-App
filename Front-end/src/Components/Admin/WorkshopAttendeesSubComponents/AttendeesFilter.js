import React, { useContext } from 'react';
import { AttendeeContext } from '../../../Context/AttendeeContext';

const AttendeesFilter = () => {

    const { allAttendees, handleFilterAttendee } = useContext(AttendeeContext);

        return (  
            <div>
                <label>Filter by Role </label>
                <select onChange={(event) => handleFilterAttendee(event.target.value)}>
                    <option
                        value={'All attendees'}>
                        All attendees
                    </option>
                    {allAttendees.map(attendee => {
                            return ( 
                            <option
                            key={attendee.id}
                            value={attendee.role[0].name}
                            >
                                {attendee.role[0].name}
                            </option>
                            )
                    })}
                </select>
            </div>
        );
}

 
export default AttendeesFilter;