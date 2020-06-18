import React from 'react';

const WorkshopDetails = (workshop) => {

        return (
            <div>
                <p>{workshop.title}</p>
                <p>{workshop.status_open}</p>
                <p>{workshop.date}</p>
                <p>{workshop.description}</p>
                <p>{workshop.room_id}</p>
            </div>
        );
}

export default WorkshopDetails;