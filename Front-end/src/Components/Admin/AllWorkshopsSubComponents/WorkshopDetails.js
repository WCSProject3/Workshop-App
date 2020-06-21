import React from 'react';

const WorkshopDetails = (workshop) => {

    const workshopDate = workshop.date.substring(0, 10);

        return (
            
            <div>
                <p>Title: {workshop.title}</p>
                <p>Open: {workshop.status_open}</p>
                <p>Date: {workshopDate}</p>
                <p>Description: {workshop.description}</p>
                <p>Room: {workshop.room_id}</p>
            </div>
        );
}

export default WorkshopDetails;