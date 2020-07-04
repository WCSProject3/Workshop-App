import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaListUl } from 'react-icons/fa';

const WorkshopDetails = ({workshop, toggleDisplayModal}) => {


    const workshopDate = workshop.date.substring(0, 10);
    const starting_at = workshop.starting_hour.substring(0, 5);
    const ending_at = workshop.ending_hour.substring(0, 5);

    console.log(workshop)


        return (
            <tr>
                <td>
                    <div>{workshopDate}</div>
                    <div>{`${starting_at}-${ending_at}`}</div> 
                </td>
                <td>{workshop.title}</td>
                <td>{workshop.workshop_speaker}</td>
                <td>{`${workshop.enrolled_ateendees}/${workshop.room_capacity}`}</td>
                <td>{workshop.room_type}</td>
                <td>{workshop.room_manager}</td>
                <td className="dropdown">
                    <button className="options-icon"><FaListUl /></button>
                    <div className="btns-dropdown">
                        <button><Link to={`/admin/workshop-attendees/${workshop.id}`}>more</Link></button>
                        <button>export</button>
                        <button onClick={() => toggleDisplayModal(workshop.id)}>edit</button>
                        <button className="delete-workshop-btn">delete</button>
                    </div>
                </td>
            </tr>
        );
}

export default WorkshopDetails;