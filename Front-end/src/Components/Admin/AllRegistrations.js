import React, { useContext, useState } from 'react';
import './AllRegistrations.scss'
import RegistrationsList from './AllRegistrationsSubComponents/RegistrationsList';
import { UserContext } from '../../Context/UserContext'
import Filters from '../SharedComponents/Filters';
import ModalForm from '../SharedComponents/ModalForm';

const AllRegistrations = () => {

    const { users, handleChangeSearch, searchValue, handleFilterUser, filterUser } = useContext(UserContext);

    const [displayModal, setDisplayModal] = useState(false);
    const [user, setUser] = useState([])

    const roles = [{role:"Attendees"} ,{role:"Speakers"}]

    const toggleDisplayModal = () => {
        setDisplayModal(!displayModal)
    }

    const handleSetUser = (sendTo) => {
        setUser([sendTo])
        console.log(sendTo)
    }

    return ( 
        <div>
            <div className="all-resgistrations-header">
                <h1>All registrations</h1>
            </div>
            {displayModal && <ModalForm toggleDisplayModal={toggleDisplayModal} attendees={user} active="notification" />}
            <div className="all-registrations-body">
                <Filters handleSearch={handleChangeSearch} seachValue={searchValue} optionsList={roles} handleOption={handleFilterUser} defaultOption="All users" optionKey="role" optionValue={filterUser} />
                <RegistrationsList users={users} handleSetUser={handleSetUser} toggleDisplayModal={toggleDisplayModal} /> 
            </div>
           
        </div>
     );
}
 
export default AllRegistrations;