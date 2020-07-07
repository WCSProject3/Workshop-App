import React from "react";
import ReactPDF, {
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
  pdf,
} from "@react-pdf/renderer";
import WorkshopView from "../Documents/WorkshopView";
import ReactDOM from "react-dom";

const WorkshopDetails = (workshop) => {
  const workshopDate = workshop.date.substring(0, 10);
  const starting_at = workshop.starting_hour.substring(0, 5);
  const ending_at = workshop.ending_hour.substring(0, 5);

  console.log(workshop);

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
        <PDFDownloadLink
          document={<WorkshopView workshop={workshop} />}
          fileName="Test.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? <button>loading</button> : <button>export</button>
          }
        </PDFDownloadLink>
      </td>

      {/* edit button */}
    </tr>
  );
};
ReactDOM.render(<WorkshopView />, document.getElementById("root"));
export default WorkshopDetails;
