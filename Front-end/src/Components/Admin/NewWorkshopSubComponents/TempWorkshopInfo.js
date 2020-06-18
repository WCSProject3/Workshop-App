import React, { useContext } from "react";
import { WorkshopContext } from "../../../Context/WorkshopContext";

const TempWorkshopInfo = ({ tempWorkshop }) => {
  console.log(tempWorkshop);
  const { confirmWorkshop } = useContext(WorkshopContext);
  return (
    <li>
      <div>{tempWorkshop.newObject.date}</div>
      <div>{tempWorkshop.newObject.title}</div>
      <div>{tempWorkshop.newObject.speaker}</div>
      <div>{tempWorkshop.newObject.room}</div>

      <button onClick={confirmWorkshop}>Confirm Workshop</button>
    </li>
  );
};

export default TempWorkshopInfo;
