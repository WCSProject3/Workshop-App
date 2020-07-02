import React, { useState, useEffect } from 'react';
import WorkshopDetail from './WorkshopDetail';
import axios from 'axios';


const WorkshopInfo = ( { workshopId } ) => {

    const [workshop, setWorkshop] = useState([]);

    console.log('url id', workshopId)


    const getWorkshop = () => {
        axios
            .get(`/workshops/${workshopId}`)
            .then((response) => setWorkshop(response.data[0]))
    }

    useEffect(() => {
        getWorkshop();
    }, [workshopId]);


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