import React from 'react';

const AttendeeDetails = (attendee) => {

        return (
            <div>
                <p>{attendee.id}</p>
                <p>{attendee.email}</p>
                <p>{attendee.firstname}</p>
                <p>{attendee.lastname}</p>
                <p>{attendee.company}</p>
                <p>{attendee.position}</p>
                <p>{attendee.country}</p>
                <p>{attendee.role[0].name}</p>
            </div>
        );
}

export default AttendeeDetails;