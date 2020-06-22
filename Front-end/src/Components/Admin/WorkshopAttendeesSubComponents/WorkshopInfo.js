import React, { useState, useEffect } from 'react';
import WorkshopDetails from '../AllWorkshopsSubComponents/WorkshopDetails';
import axios from 'axios';


const WorkshopInfo = ( { workshopId } ) => {

    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        axios
            .get(`/workshops/${workshopId}`)
            .then((response) => { setWorkshops(response.data) }) 
    }, []);

        return (
            <div>
                {workshops.map(workshop => {
                    return <WorkshopDetails 
                        key={workshop.id} 
                        {...workshop} /> 
                })}
            </div>
        );
}

export default WorkshopInfo;