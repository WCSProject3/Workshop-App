import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WorkshopContext = createContext();

const WorkshopContextProvider = (props) => {
  const [workshops, setWorkshops] = useState([]);
  const [tempWorkshops, setTempWorkshop] = useState([]);
  const [allWorkshops, setAllWorkshops] = useState([]);
  const [workshopId, setWorkshopId] = useState();

  const addTempWorkshop = (newObject) => {
    setTempWorkshop([...tempWorkshops, newObject]);
  };

  const confirmWorkshop = (newObject) => {
    setWorkshops([...workshops, { newObject }]);
  };

  useEffect(() => {
    axios
      .get("/workshops")
      .then((response) => setWorkshops(response.data));
    axios
      .get("/workshops")
      .then((response) => setAllWorkshops(response.data));
  }, []);

  //useEffect(() => {console.log(props.match.params)});

  function handleFilterDate(date) {
    axios.get("/workshops")
    .then((response) => {
      if (date === "All workshops") {
        setWorkshops(response.data);
        return workshops;
      } else {
        const filterdResult = allWorkshops.filter((workshop) => {
          const workshopDate = workshop.date.substring(0, 10);
          return workshopDate === date;
        });
        setWorkshops(filterdResult);
        setAllWorkshops(response.data);
      }
    });
  }

  function getWorkshopId() {
    setWorkshopId(this.props.match.params.id);
    console.log(this.props.match.params.id)
    axios.get(`/workshops/${workshopId}`).then((response) => {
        setWorkshops(response.data);
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
          getWorkshopId,
          workshopId
        }}
      >
        {props.children}
      </WorkshopContext.Provider>
    </div>
  );
};
export default WorkshopContextProvider;
