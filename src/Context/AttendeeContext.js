import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AttendeeContext = createContext();

const AttendeeContextProvider = (props) => {

    const [ attendees, setAttendees ] = useState([]);
    const [ allAttendees, setAllattendees ] = useState([]);

    useEffect(() => {
        axios.get('dummyData.json')
        .then(response => console.log(response.data.user))
        axios.get('dummyData.json')
        .then(response => setAllattendees(response.data.user))
    }
    , []);

    function handleFilterAttendee(role) {
        axios.get('dummyData.json')
        .then(response => {
            if(role === 'All attendees') {
                setAttendees(response.data.user)
                    return attendees
            } else {
                const filterdResult = allAttendees
                .filter(attendee => {
                    return attendee.role[0].name === role
                })
                setAttendees(filterdResult)
                setAllattendees(response.data.user)
            }
        })
    }

    return ( 
        <div>
            <AttendeeContext.Provider value={{allAttendees, attendees, handleFilterAttendee}}>
                {props.children}
            </AttendeeContext.Provider>
        </div>
    )
}
 
export default AttendeeContextProvider;