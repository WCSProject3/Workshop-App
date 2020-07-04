import React, { useContext, useState } from 'react';
import WorkshopList from './AllWorkshopsSubComponents/WorkshopList';
import WorkshopFilters from '../SharedComponents/WorkshopFilters';
import { WorkshopContext } from '../../Context/WorkshopContext'
import { Link } from 'react-router-dom';
import SearchBar from '../SharedComponents/SearchBar';
import './AllWorkshops.scss'
import ModalForm from '../SharedComponents/ModalForm';

const AllWorkshops = (date) => {

    const { workshops } = useContext(WorkshopContext);
    const [ displayModal, setDisplayModal ] = useState(false);
    const [ workshopInEdit, setWorkshopInEdit ] = useState([]);

    const toggleDisplayModal = (id) => {
        setDisplayModal(!displayModal)
        const editingWorkshop = workshops.filter(workshop => (workshop.id === id))
        setWorkshopInEdit(editingWorkshop[0])
    }

    return ( 
        <div>
            <div className="all-workshops-header">
                <h1>All Workshops</h1>
                <button className="new-workshop-btn"><Link to='/admin/new-workshop'>New Workshop</Link></button>
            </div>
            {displayModal && <ModalForm toggleDisplayModal={toggleDisplayModal} workshopInEdit={workshopInEdit} active="workshop"/>}
            <div className="all-workshops-body">
                <WorkshopFilters date={date} />
                <WorkshopList workshops={workshops} toggleDisplayModal={toggleDisplayModal}/> 
            </div>
           
        </div>
     );
}
 
export default AllWorkshops;