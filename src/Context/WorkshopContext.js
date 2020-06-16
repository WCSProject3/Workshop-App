import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WorkshopContext = createContext();
const WorkshopContextProvider = (props) => {
  const [workshops, setWorkshops] = useState([]);
  const [tempWorkshops, setTempWorkshop] = useState([]);

  const addTempWorkshop = (newObject) => {
    setTempWorkshop([
      ...tempWorkshops,
      {
        newObject,
      },
    ]);
  };

  const confirmWorkshop = (newObject) => {
    setWorkshops([...workshops, { newObject }]);
  };

  useEffect(() => {
    axios
      .get("dummyData.json")
      .then((response) => setWorkshops(response.data.workshops));
  }, []);

  return (
    <div>
      <WorkshopContext.Provider
        value={{ workshops, tempWorkshops, addTempWorkshop, confirmWorkshop }}
      >
        {props.children}
      </WorkshopContext.Provider>
    </div>
  );
};
export default WorkshopContextProvider;
