import React, { useState, useContext, useEffect } from 'react';
import AttendeesList from './WorkshopAttendeesSubComponents/AttendeesList';
import WorkshopInfo from './WorkshopAttendeesSubComponents/WorkshopInfo';
import './WorkshopAttendees.scss';
import { WorkshopContext } from '../../Context/WorkshopContext';
import ModalForm from '../SharedComponents/ModalForm';
import axios from 'axios';


const WorkshopAttendees = ( props ) => {

    const workshopId = props.match.params.id;

    const { workshops } = useContext(WorkshopContext);
    const [workshop, setWorkshop] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [workshopInEdit, setWorkshopInEdit] = useState([]);
    const [attendees, setAttendees] = useState([]);
    const [allAttendees, setAllAttendees] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [modal, setModal] = useState("");

    useEffect(() => {
        getWorkshop();
        getAttendees()
    }, [workshopId]);

    const getWorkshop = () => {
        axios
            .get(`/workshops/${workshopId}`)
            .then((response) => setWorkshop(response.data[0]))
    }

    const getAttendees = () => {
        axios
            .get(`/workshops/${workshopId}/attendees/`)
            .then((response) => { 
                setAttendees(response.data)
                setAllAttendees(response.data)
            }) 
    }

    const toggleDisplayModal = () => {
        setDisplayModal(!displayModal)
        const editingWorkshop = workshops.filter(workshop => (workshop.id == workshopId))
        setWorkshopInEdit(editingWorkshop[0])
        getWorkshop()
    }

    const handleChangeSearch = (event) => {
        const { value } = event.target;
        
        if (value.length) {
          const filteredAttendees = allAttendees.filter((attendee) => {
            const attendeeName = `${attendee.firstname} ${attendee.lastname}`
            return (
                attendeeName.toLowerCase().includes(value.toLowerCase()) 
            );
          });
          setSearchValue(value);
          setAttendees(filteredAttendees);
        } else {
          setSearchValue(value);
          setAttendees(allAttendees);
        }
      };

      const selectModal = (modal) => {
        setModal(modal);
      }

    return ( 
        <div>
            {displayModal && <ModalForm workshopInEdit={workshopInEdit} toggleDisplayModal={toggleDisplayModal} active={modal} attendees={attendees}/>}
             <div className="workshop-attendees-header">
                <h1>Workshop Info</h1>
            </div>
            <div className="workshop-attendees-body">
                <WorkshopInfo workshop={workshop} toggleDisplayModal={toggleDisplayModal} selectModal={selectModal}/>
                <AttendeesList attendees={attendees} handleChangeSearch={handleChangeSearch} searchValue={searchValue}/>
            </div>
            
        </div>
    );
}
 
export default WorkshopAttendees;