import React from 'react';
import WorkshopList from './AllWorkshopsSubComponents/WorkshopList';
import WorkshopFilters from '../SharedComponents/WorkshopFilters';
import { Link } from 'react-router-dom';
import './AllWorkshops.scss'

const AllWorkshops = (date) => {
    return ( 
        <div>
            <div className="all-workshops-header">
                <h1>All Workshops</h1>
                <button className="new-workshop-btn"><Link to='/new-workshop'>New Workshop</Link></button>
            </div>
            <div className="all-workshops-body">
                <h2 className="all-workshops-title">Workshops List</h2>
                <WorkshopFilters date={date} />
                <WorkshopList /> 
            </div>
           
        </div>
     );
}
 
export default AllWorkshops;