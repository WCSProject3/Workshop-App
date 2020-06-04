import React, { useContext } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';


const WorkshopDetails = (workshop) => {

        return (
            <div>
                <p>{workshop.title}</p>
                <p>{workshop.status_open}</p>
                <p>{workshop.date}</p>
                <p>{workshop.description}</p>
            </div>
        );
}

export default WorkshopDetails;