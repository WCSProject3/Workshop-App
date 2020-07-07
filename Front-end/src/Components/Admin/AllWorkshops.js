import React, { useContext, useState } from "react";
import WorkshopList from "./AllWorkshopsSubComponents/WorkshopList";
import WorkshopFilters from "../SharedComponents/WorkshopFilters";
import { WorkshopContext } from "../../Context/WorkshopContext";
import { Link } from "react-router-dom";
import SearchBar from "../SharedComponents/SearchBar";
import "./AllWorkshops.scss";
import ReactPDF, {
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
  pdf,
} from "@react-pdf/renderer";
import ReactDOM from "react-dom";
import WorkshopView from "./Documents/WorkshopView";

const AllWorkshops = (date) => {
  const [isPdfDisplayed, setIsPdfDisplayed] = useState(false);

  return (
    <div>
      <div className="all-workshops-header">
        <h1>All Workshops</h1>
        <button className="new-workshop-btn">
          <Link to="/new-workshop">New Workshop</Link>
        </button>
      </div>
      <div className="all-workshops-body">
        <WorkshopFilters date={date} />
        <WorkshopList />
      </div>
    </div>
  );
};

ReactDOM.render(<WorkshopView />, document.getElementById("root"));

export default AllWorkshops;
