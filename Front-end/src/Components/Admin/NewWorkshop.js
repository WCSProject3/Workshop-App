import React, { useContext, useEffect } from "react";
import WorkshopForm from "./NewWorkshopSubComponents/WorkshopForm";
import { WorkshopContext } from "../../Context/WorkshopContext";
import TempWorkshopInfo from "./NewWorkshopSubComponents/TempWorkshopInfo";
import { Link } from 'react-router-dom';
import './NewWorkshop.scss'

const NewWorkshop = () => {
  const { tempWorkshops } = useContext(WorkshopContext);
  
  return (
    <div className="new-workshops-body">
      <div className="new-workshops-header">
        <h1>New Workshops</h1>
        <button className="all-workshops-btn">All Workshops</button>
        <button className="confirm-all-btn"><Link to='/'>Confirm All</Link></button>
      </div>
        {tempWorkshops.map((tempWorkshop) => {
          return (
            <TempWorkshopInfo
              tempWorkshop={tempWorkshop}
              key={tempWorkshop.title}
            />
          );
        })}
      <WorkshopForm />
      {/*<NewRoomForm />*/}
    </div>
  );
};

export default NewWorkshop;
