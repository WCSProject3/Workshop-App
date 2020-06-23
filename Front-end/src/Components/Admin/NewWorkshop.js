import React, { useContext } from "react";
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
        <button className="all-workshops-btn"><Link to='/'>All Workshops</Link></button>
        <button className="confirm-all-btn">Confirm All</button>
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
