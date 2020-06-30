import React, { useState, useEffect } from 'react';
import WorkshopDetail from './WorkshopDetail';
import axios from 'axios';


const WorkshopInfo = ( { workshopId } ) => {

    const [workshop, setWorkshop] = useState([]);

    const getWorkshop = () => {
        axios
            .get(`/workshops/${workshopId}`)
            .then((response) => setWorkshop(response.data[0]))
    }

    useEffect(() => {
        getWorkshop();
    }, []);


        return (
            <div>
                {workshop.length !== 0 && 
                <WorkshopDetail
                    key={workshop.id} 
                    workshop={workshop} />}
            </div>
        
        );
}

export default WorkshopInfo;