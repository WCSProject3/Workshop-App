import React from 'react';

const WorkshopDetails = () => {

        return (
            <div>
                {workshops.map(workshop => (
                    <div>
                        <p>{workshop.id}</p>
                        <p>{workshop.title}</p>
                        <p>{workshop.status_open}</p>
                        <p>{workshop.description}</p>           
                        <p>{workshop.room.}</p>
                    </div>
                ))} 
            </div>
        );
}


export default WorkshopDetails;