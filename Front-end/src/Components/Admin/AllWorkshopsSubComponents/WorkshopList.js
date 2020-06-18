import React, { useContext } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import WorkshopDetails from './WorkshopDetails';


const WorkshopList = () => {

    const { workshops } = useContext(WorkshopContext);

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

export default WorkshopList;