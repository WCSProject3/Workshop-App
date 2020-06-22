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
      .then((response) => response.data)
      .then((workshopsList) => {
        setWorkshops(workshopsList)
        setAllWorkshops(workshopsList)
      });
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

  const editTempWorkshop = (newObject) => {
    const workshopsList = [...tempWorkshops];
    const i = workshopsList.findIndex((wrkshop) => wrkshop.id === newObject.id);
    workshopsList.splice(i, 1, newObject);
    console.log("workshops list before", workshopsList)
    setTempWorkshop(workshopsList);
  };

  const deleteTempWorkshop = (id) => {
    const workshopList = tempWorkshops.filter(workshop => workshop.id !== id)
    setTempWorkshop(workshopList);
};

  const handleFilterDate = (date) => {
    axios.get("/workshops").then((response) => {
      if (date === "All workshops") {
        setWorkshops(response.data);
        return workshops;
      } else {
        const filterdResult = allWorkshops.filter((workshop) => {
          const workshopDate = workshop.date;
          return workshopDate === date;
        });
        setWorkshops(filterdResult);
        setAllWorkshops(response.data);
      }
    });
  }

  
  
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
          deleteTempWorkshop
        }}
      >
        {props.children}
      </WorkshopContext.Provider>
    </div>
  );
};
export default WorkshopContextProvider;
