import React, { useContext } from 'react';
import './RegistrationDetails.scss'
import { UserContext } from '../../../Context/UserContext';

const RegistrationDetails = (user) => {

    const { deleteUser } = useContext(UserContext)

    const name = `${user.firstname} ${user.lastname}`

    console.log(user)
        return (
            <tr>
                <td>
                    {/*<img>profile photo</img>*/}
                    <div>{name}</div> 
                </td>
                <td>{user.email}</td>
                <td>{user.position}</td>
                <td>{user.company}</td>
                <td>{/*user.workshopsNumber*/}</td>
                <td>{user.country}</td>
                <td>{user.role}</td>
                <td>
                    <button onClick={() => deleteUser(user.id, user.role )}>delete</button>
                </td>
                
                {/* edit button */}
            </tr>
        );
}

export default RegistrationDetails;