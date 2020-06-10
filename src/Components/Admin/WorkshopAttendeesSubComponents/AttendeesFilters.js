import React, { useContext } from 'react';
import { attendeeContext } from '../../Context/attendeeContext';

const attendeeFilters = () => {

    const { allattendees, handleFilterAttendee } = useContext(attendeeContext);

        return (  
            <div>
                <label>Filter by Role </label>
                <select onChange={(event) => handleFilterAttendee(event.target.value)}>
                    <option
                        value={'All attendees'}>
                        All attendees
                    </option>
                    {allattendees.map(attendee => {
                            return ( 
                            <option
                            key={attendee.id}
                            value={attendee.role.name}
                            >
                                {attendee.role.name}
                            </option>
                            )
                    })}
                </select>
            </div>
        );
}

 
export default attendeeFilters;