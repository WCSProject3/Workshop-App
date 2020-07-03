import React, { useContext } from 'react';
import WorkshopList from './AllWorkshopsSubComponents/WorkshopList';
import WorkshopFilters from '../SharedComponents/WorkshopFilters';
import { WorkshopContext } from '../../Context/WorkshopContext'
import { Link } from 'react-router-dom';
import SearchBar from '../SharedComponents/SearchBar';
import './AllWorkshops.scss'

const AllWorkshops = (date) => {


    return ( 
        <div>
            <div className="all-workshops-header">
                <h1>All Workshops</h1>
                <button className="new-workshop-btn"><Link to='/admin/new-workshop'>New Workshop</Link></button>
            </div>
            <div className="all-workshops-body">
                <WorkshopFilters date={date} />
                <WorkshopList /> 
            </div>
           
        </div>
     );
}
 
export default AllWorkshops;