import React, { useContext, useState } from 'react';
import './AllRegistrations.scss'
import RegistrationsList from './AllRegistrationsSubComponents/RegistrationsList';
import { UserContext } from '../../Context/UserContext'
import SearchBar from '../SharedComponents/SearchBar';
import ModalForm from '../SharedComponents/ModalForm';

const AllRegistrations = () => {

    const { handleChangeSearch, searchValue } = useContext(UserContext);

    const [displayModal, setDisplayModal] = useState(false);
    const [user, setUser] = useState([])

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
                <div className="all-registrations-table-header">
                    <SearchBar handleChange={handleChangeSearch} searchValue={searchValue} />
                </div>
                <RegistrationsList handleSetUser={handleSetUser} toggleDisplayModal={toggleDisplayModal} /> 
            </div>
           
        </div>
     );
}
 
export default AllRegistrations;