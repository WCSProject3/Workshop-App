import React, { useState } from 'react';
import ReactPDF, {
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
  pdf,
} from "@react-pdf/renderer";
import WorkshopView from "../Documents/WorkshopView";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FaListUl } from 'react-icons/fa';

const WorkshopDetails = ({workshop, toggleDisplayModal, deleteWorkshop}) => {
  const workshopDate = workshop.date.substring(0, 10);
  const starting_at = workshop.starting_hour.substring(0, 5);
  const ending_at = workshop.ending_hour.substring(0, 5);

    console.log("workshop", workshop)
    
    const handleDelete = () => {
        toggleDisplayModal("confirm", "are you sure you want to delete this workshop?", workshop.id, workshop.enrolled_ateendees)
    }

    const handleEdit = () => {
        toggleDisplayModal("workshop", "", workshop.id)
    }

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
                                <PDFDownloadLink
                                document={<WorkshopView workshop={workshop} />}
                                fileName="Test.pdf">
                                {({ blob, url, loading, error }) =>
                                loading ? <button>loading</button> : <button>export</button>}
                                 </PDFDownloadLink>
                        <button onClick={handleEdit}>edit</button>
                        <button className="delete-workshop-btn" onClick={handleDelete}>delete</button>
                    </div>
                </td>
            </tr>
        );
}

      {/* edit button */}
    </tr>
  );
};
ReactDOM.render(<WorkshopView />, document.getElementById("root"));
export default WorkshopDetails;
