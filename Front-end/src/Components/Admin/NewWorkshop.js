import React, { useContext, useState } from "react";
import WorkshopForm from "./NewWorkshopSubComponents/WorkshopForm";
import { WorkshopContext } from "../../Context/WorkshopContext";
import TempWorkshopInfo from "./NewWorkshopSubComponents/TempWorkshopInfo";
import { Link } from "react-router-dom";
import "./NewWorkshop.scss";
import MessageModal from "./Modals/MessageModal";

const NewWorkshop = () => {
  const { tempWorkshops } = useContext(WorkshopContext);

  const [isMessageModalDisplayed, setMessageModalVisibility] = useState(false);

  const toggleMessageModal = () => {
    setMessageModalVisibility(true);
    setTimeout(() => setMessageModalVisibility(false), 5000);
    console.log("ITS WORKING");
  };

  return (
    <div className="new-workshops-body">
      <div className="new-workshops-header">
        <h1>New Workshops</h1>
        <button className="all-workshops-btn">
          <Link to="/">All Workshops</Link>
        </button>
        <button className="confirm-all-btn">Confirm All</button>
      </div>
      <div>
        {isMessageModalDisplayed && (
          <MessageModal content="Your Workshop was successfully added" />
        )}
      </div>
      {tempWorkshops.map((tempWorkshop) => {
        return (
          <TempWorkshopInfo
            tempWorkshop={tempWorkshop}
            key={tempWorkshop.title}
            toggleMessageModal={toggleMessageModal}
          />
        );
      })}
      <WorkshopForm />
      {/*<NewRoomForm />*/}
    </div>
  );
};

export default NewWorkshop;
