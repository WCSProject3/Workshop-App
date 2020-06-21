import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WorkshopContext = createContext();
const WorkshopContextProvider = (props) => {
  const [workshops, setWorkshops] = useState([]);
  const [tempWorkshops, setTempWorkshop] = useState([]);
  const [allWorkshops, setAllWorkshops] = useState([]);

  useEffect(() => {
    getWorkshops();
  }, []);

  const getWorkshops = () => {
    axios
      .get("/workshops")
      .then((response) => setWorkshops(response.data));
  }

  const addTempWorkshop = (newObject) => {
    setTempWorkshop([...tempWorkshops, newObject]);
  };

  const confirmWorkshop = (newObject) => {
    axios
      .post('/workshops', newObject)
      .then((response) => console.log(response))

    getWorkshops();
  };

  function handleFilterDate(date) {
    axios.get("dummyData.json").then((response) => {
      if (date === "All workshops") {
        setWorkshops(response.data.workshops);
        return workshops;
      } else {
        const filterdResult = allWorkshops.filter((workshop) => {
          return workshop.date === date;
        });
        setWorkshops(filterdResult);
        setAllWorkshops(response.data.workshops);
      }
    });
  }

  const editTempWorkshop = (newObject) => {
    const workshopsList = tempWorkshops;
    const i = workshopsList.findIndex((wrkshop) => wrkshop.id === newObject.id);
    workshopsList.splice(i, 1, newObject);
    setTempWorkshop(workshopsList);
  };
  
  return (
    <div>
      <WorkshopContext.Provider
        value={{
          workshops,
          tempWorkshops,
          addTempWorkshop,
          confirmWorkshop,
          allWorkshops,
          handleFilterDate,
          editTempWorkshop,
        }}
      >
        {props.children}
      </WorkshopContext.Provider>
    </div>
  );
};
export default WorkshopContextProvider;
