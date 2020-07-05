import React, { useState, useContext, useEffect } from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import WorkshopInfo from './WorkshopAttendeesSubComponents/WorkshopInfo';
import './WorkshopAttendees.scss';
import { WorkshopContext } from '../../Context/WorkshopContext';
import ModalForm from '../SharedComponents/ModalForm';
import axios from 'axios';


const WorkshopAttendees = ( props ) => {

    const workshopId = props.match.params.id;

    const { workshop, getWorkshop, getAttendees, attendees } = useContext(WorkshopContext);
    const [displayModal, setDisplayModal] = useState(false);
    const [workshopInEdit, setWorkshopInEdit] = useState([]);
    const [modal, setModal] = useState("");

    useEffect(() => {
        getWorkshop(workshopId);
        getAttendees(workshopId)
    }, [workshopId]);

    const toggleDisplayModal = () => {
        setDisplayModal(!displayModal)
        setWorkshopInEdit(workshop)
        getWorkshop(workshopId)
    }

    const selectModal = (modal) => {
        setModal(modal);
    }

    return ( 
        workshop !== [] &&
        <div>
            {displayModal && <ModalForm workshopInEdit={workshopInEdit} toggleDisplayModal={toggleDisplayModal} active={modal} attendees={attendees}/>}
             <div className="workshop-attendees-header">
                <h1>Workshop Info</h1>
            </div>
            <div className="workshop-attendees-body">
                <WorkshopInfo workshop={workshop} toggleDisplayModal={toggleDisplayModal} selectModal={selectModal}/>
                <AttendeesList attendees={attendees}/>
            </div>
        </div>
    );
}
 
export default WorkshopAttendees;