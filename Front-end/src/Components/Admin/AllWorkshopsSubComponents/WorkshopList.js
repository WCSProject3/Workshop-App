import React, { useContext, useState } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import WorkshopDetails from './WorkshopDetails';
import './WorkshopList.scss'
import ModalForm from './ModalForm';


const WorkshopList = () => {

    const { allWorkshopsCopy } = useContext(WorkshopContext);
    const [ displayModal, setDisplayModal ] = useState(false);
    const [ workshopInEdit, setWorkshopInEdit ] = useState([]);

    const toggleDisplayModal = (id) => {
        setDisplayModal(!displayModal)
        const editingWorkshop = allWorkshopsCopy.filter(workshop => (workshop.id === id))
        setWorkshopInEdit(editingWorkshop[0])
    }

        return (
            <div>
                {displayModal && 
                <ModalForm 
                workshopInEdit={workshopInEdit}
                toggleDisplayModal={toggleDisplayModal}/>}
            <table className="workshops-table">
                <colgroup>
                    <col className="date-col" />
                    <col className="title-col" />
                    <col className="speaker-col" />
                    <col className="registrations-col" />
                    <col className="room-setup-col" />
                    <col className="room-manager-col" />
                </colgroup>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Workshop Title</th>
                        <th>Speaker</th>
                        <th>Total Regs.</th>
                        <th>Room Setup</th>
                        <th>Room Manager</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allWorkshopsCopy.map(workshop => {
                        return <WorkshopDetails 
                            key={workshop.id} 
                            workshop={workshop} 
                            toggleDisplayModal={toggleDisplayModal}/> 
                    })} 
                </tbody>
            </table>
            </div>
        );
}

export default WorkshopList;