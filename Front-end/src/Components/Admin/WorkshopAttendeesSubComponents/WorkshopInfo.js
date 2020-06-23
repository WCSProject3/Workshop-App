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

    const workshopInfo = workshops.filter(workshop => {
        return workshop.id === workshopId
    })

        return (
            <div>
                <WorkshopDetails 
                        key={workshopInfo.id} 
                        workshop={workshopInfo} /> 
            </div>
        );
}

export default WorkshopInfo;