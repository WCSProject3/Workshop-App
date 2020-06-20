import React from 'react';
import WorkshopList from './AllWorkshopsSubComponents/WorkshopList';
import WorkshopFilters from '../SharedComponents/WorkshopFilters';
import { Link } from 'react-router-dom';

const AllWorkshops = (date) => {
    return ( 
        <div>
            <button><Link to='/new-workshop'>New Workshop</Link></button>
            <WorkshopFilters date={date} />
            <WorkshopList /> 
        </div>
     );
}
 
export default AllWorkshops;