import React, { useContext } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import WorkshopDetails from './WorkshopDetails';
import './WorkshopList.scss'


const WorkshopList = () => {

    const { workshops } = useContext(WorkshopContext);

        return (
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
                    {workshops.map(workshop => {
                        return <WorkshopDetails 
                            key={workshop.id} 
                            {...workshop} /> 
                    })} 
                </tbody>
            </table>
        );
}

export default WorkshopList;