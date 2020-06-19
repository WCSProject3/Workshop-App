import React, { useContext } from 'react';
import { WorkshopContext } from '../../Context/WorkshopContext';

const WorkshopFilters = () => {

    const { allWorkshops, handleFilterDate } = useContext(WorkshopContext);

        return (  
            <div>
                <label>Filter by Date </label>
                <select onChange={(event) => handleFilterDate(event.target.value)}>
                    <option
                        value={'All workshops'}>
                        All workshops
                    </option>
                    {allWorkshops.map(workshop => {
                            return ( 
                            <option
                            key={workshop.id}
                            value={workshop.date}
                            >
                                {workshop.date}
                            </option>
                            )
                    })}
                </select>
            </div>
        );
}

 
export default WorkshopFilters;