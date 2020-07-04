import React from 'react';
import { MdDelete, MdEdit, MdMessage } from 'react-icons/md';

const WorkshopInfo = ( { workshop, toggleDisplayModal, selectModal } ) => {

    const openModal = (modal) => {
        toggleDisplayModal()
        selectModal(modal)
    }
    console.log(workshop)

        return (
            <div>
               <div className="workshop-info">
                    <div className="workshop-info-header">
                        <div className="workshop-info-date">
                           {workshop.date && <div className="date">{`${workshop.date.substring(8,10)} ${workshop.workshop_month} - ${workshop.starting_hour.substring(0,5)}-${workshop.ending_hour.substring(0,5)}`}</div>}
                        </div>
                        <div className="workshop-info-header-btns">
                            <button className="workshop-icons" onClick={() => openModal("notification")}><MdMessage /></button>
                            <button className="workshop-icons" onClick={() => openModal("workshop")}><MdEdit /></button>
                            <button className="workshop-icons"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="workshop-info-body">
                        <div className="workshop-info-left">
                            <h2>{workshop.title}</h2>
                            <h4>{workshop.workshop_speaker}</h4>
                            <p>{workshop.description}</p>
                        </div>
                        <div className="workshop-info-right">
                            <div className="room-manager">
                                <p className="room"><span>Room:</span> {workshop.room}</p>
                                <p><span>Room manager:</span> {workshop.room_manager}</p>
                            </div>
                            <p><span>Room setup:</span> {workshop.room_type}</p>
                            <p><span>Room capacity:</span> {workshop.room_capacity}</p>
                            <p className={workshop.status_open === "1" ? "open" : "closed"}><span>Registrations:</span>{" "}{workshop.status_open === "1" ? "OPEN" : "CLOSED"}</p>
                        </div>
                    </div>
                </div>
            </div>
        
        );
}

export default WorkshopInfo;