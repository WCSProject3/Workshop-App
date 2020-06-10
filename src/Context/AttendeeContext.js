import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AttendeeContext = createContext();

const attendeeContextProvider = (props) => {

    const [ attendees, setattendees ] = useState([]);
    const [ allattendees, setAllattendees ] = useState([]);

    useEffect(() => {
        axios.get('dummyData.json')
        .then(response => setattendees(response.data.attendees))
        axios.get('dummyData.json')
        .then(response => setAllattendees(response.data.attendees))
    }
    , []);

    function handleFilterAttendee(role) {
        axios.get('dummyData.json')
        .then(response => {
            if(date === 'All attendees') {
                setattendees(response.data.attendees)
                    return attendees
            } else {
                const filterdResult = allattendees
                .filter(attendee => {
                    return attendee.role.name === name
                })
                setattendees(filterdResult)
                setAllattendees(response.data.attendees)
            }
        })
    }

    return ( 
        <div>
        <AttendeeContext.Provider value={{allattendees, attendees, handleFilterAttendee}}>
            {props.children}
        </AttendeeContext.Provider>
        </div>
    )
}
 
export default attendeeContextProvider;