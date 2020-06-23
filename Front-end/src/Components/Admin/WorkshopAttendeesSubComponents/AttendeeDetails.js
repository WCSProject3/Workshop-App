import React from 'react';

const AttendeeDetails = (attendee) => {

        return (
            <div>
                <p>Firstname: {attendee.firstname}</p>
                <p>Lastname: {attendee.lastname}</p>
                <p>Email: {attendee.email}</p>
                <p>Company: {attendee.company}</p>
                <p>Position: {attendee.position}</p>
                <p>Country: {attendee.country}</p>
                <p>Role: {attendee.role_id}</p>
            </div>
        );
}

export default AttendeeDetails;