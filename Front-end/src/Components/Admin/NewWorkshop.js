import React, { useContext } from "react";
import WorkshopForm from "./NewWorkshopSubComponents/WorkshopForm";
import { WorkshopContext } from "../../Context/WorkshopContext";
import TempWorkshopInfo from "./NewWorkshopSubComponents/TempWorkshopInfo";
import NewRoomForm from "./NewWorkshopSubComponents/NewRoomForm";

const NewWorkshop = () => {
  const { tempWorkshops } = useContext(WorkshopContext);
  return (
    <div>
      <ul>
        {tempWorkshops.map((tempWorkshop) => {
          return (
            <TempWorkshopInfo
              tempWorkshop={tempWorkshop}
              key={tempWorkshop.title}
            />
          );
        })}
      </ul>
      <WorkshopForm />
      {/*<NewRoomForm />*/}
    </div>
  );
};

export default NewWorkshop;
