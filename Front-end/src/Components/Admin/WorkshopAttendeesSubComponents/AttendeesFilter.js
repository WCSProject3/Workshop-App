import React, { useContext, useEffect, useState } from 'react';
import { AttendeeContext } from '../../../Context/AttendeeContext';
import axios from 'axios';

const AttendeesFilter = () => {

    const [ attendeeFiltered, setAttendeeFiltered ] = useState([])

    useEffect(() => {
        axios
            .get("/users/attendees/roles")
            .then((response) => { setAttendeeFiltered(response.data) }) 
    }, []);

    const { handleFilterAttendee } = useContext(AttendeeContext);

        return (  
            <div>
                <label>Filter by Role </label>
                <select onChange={(event) => handleFilterAttendee(event.target.value)}>
                    <option
                        value={'All attendees'}>
                        All attendees
                    </option>
                    {attendeeFiltered.map(attendee => {
                            return ( 
                            <option
                            key={attendee.id}
                            value={attendee.role_id}
                            >
                                {attendee.role_id}
                            </option>
                            )
                    })}
                </select>
            </div>
        );
}

 
export default AttendeesFilter;