import React from 'react';

const WorkshopDetails = (workshop) => {

    const workshopDate = workshop.date.substring(0, 10);
    const workshopHour = workshop.date.substring(11, 16);

    console.log(workshop)
        return (
            <tr>
                <td>{`${workshopDate} ${workshopHour} `}</td>
                <td>{workshop.title}</td>
                <td>{workshop.workshop_speaker}</td>
                <td>{workshop.room_capacity}</td>
                <td>{workshop.room_type}</td>
                <td>{workshop.room_manager}</td>
                <td>
                    <button>edit</button>
                    <button>export</button>
                </td>
                
                {/* edit button */}
            </tr>
        );
}

export default WorkshopDetails;