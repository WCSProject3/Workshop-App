import React from 'react';
import WorkshopList from './AllWorkshopsSubComponents/WorkshopList';
import WorkshopFilters from '../SharedComponents/WorkshopFilters';

const AllWorkshops = (date) => {
    return ( 
        <div>
            <WorkshopFilters date={date} />
            <WorkshopList /> 
        </div>
     );
}
 
export default AllWorkshops;