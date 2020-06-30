import React from 'react';

const WorkshopDetails = (workshop) => {

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