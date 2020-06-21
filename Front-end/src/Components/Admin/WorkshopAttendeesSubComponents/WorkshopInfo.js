import React, { useContext } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import WorkshopDetails from '../AllWorkshopsSubComponents/WorkshopDetails';


const WorkshopInfo = ( getWorkshopId ) => {

    const { workshops } = useContext(WorkshopContext);
    const { workshopId } = useContext(WorkshopContext);

    let selectedWorkshop = workshops.filter(workshop => workshop.id === workshopId);

    console.log(this.props.match.params.id);
    getWorkshopId(workshops);

        return (
            <div>
                <WorkshopDetails 
                {...selectedWorkshop}/> 
            </div>
        );
}

export default WorkshopInfo;