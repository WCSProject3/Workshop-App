import React, { useContext } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import WorkshopDetails from '../AllWorkshopsSubComponents/WorkshopDetails';


const WorkshopInfo = ( ) => {

    const { workshops, workshopId, getWorkshopId } = useContext(WorkshopContext);

    let selectedWorkshop = workshops.filter(workshop => workshop.id === workshopId);

    getWorkshopId();

        return (
            <div>
                <WorkshopDetails 
                {...selectedWorkshop}/> 
            </div>
        );
}

export default WorkshopInfo;