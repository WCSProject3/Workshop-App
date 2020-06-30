import React, { useContext } from 'react';
import './AllRegistrations.scss'
import RegistrationsList from './AllRegistrationsSubComponents/RegistrationsList';
import { UserContext } from '../../Context/UserContext'
import SearchBar from '../SharedComponents/SearchBar';

const AllRegistrations = () => {

    const { handleChangeSearch, searchValue } = useContext(UserContext);

    return ( 
        <div>
            <div className="all-resgistrations-header">
                <h1>All registrations</h1>
            </div>
            <div className="all-registrations-body">
                <div className="all-registrations-table-header">
                    <SearchBar handleChange={handleChangeSearch} searchValue={searchValue} />
                </div>
                <RegistrationsList /> 
            </div>
           
        </div>
     );
}
 
export default AllRegistrations;