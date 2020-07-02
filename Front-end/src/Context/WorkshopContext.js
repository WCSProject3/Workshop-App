import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WorkshopContext = createContext();

const WorkshopContextProvider = (props) => {
  const [workshops, setWorkshops] = useState([]);
  const [tempWorkshops, setTempWorkshop] = useState([]);
  const [allWorkshops, setAllWorkshops] = useState([]);
  const [allWorkshopsCopy, setAllWorkshopsCopy] = useState([]);
  const [months, setMonths] = useState([]);
  const [searchValue, setsearchValue] = useState('')


  useEffect(() => {
    getWorkshops();
    getMonth();
  }, []);

  const getWorkshops = () => {
    axios
      .get('/workshops')
      .then((response) => response.data)
      .then((workshopsList) => {
        setWorkshops(workshopsList);
        setAllWorkshops(workshopsList);
<<<<<<< HEAD
      });
  };

  const getMonth = () => {
    axios
      .get("/workshops/months")
=======
        setAllWorkshopsCopy(workshopsList);
      });
  };

  console.log(allWorkshops)

  const getMonth = () => {
    axios
      .get('/workshops/months')
>>>>>>> e85a9272875c2086e44930319a6c0055e78e6145
      .then((response) => response.data)
      .then((monthsList) => {
        console.log(monthsList);
        setMonths(monthsList);
      });
  };

  const addTempWorkshop = (newObject) => {
    setTempWorkshop([...tempWorkshops, newObject]);
  };

  const confirmWorkshop = (newObject) => {
    axios
<<<<<<< HEAD
      .post("/workshops", newObject)
=======
      .post('/workshops', newObject)
>>>>>>> e85a9272875c2086e44930319a6c0055e78e6145
      .then((response) => console.log(response));

    getWorkshops();
  };

  const editTempWorkshop = (newObject) => {
    const workshopsList = [...tempWorkshops];
    const i = workshopsList.findIndex((wrkshop) => wrkshop.id === newObject.id);
    workshopsList.splice(i, 1, newObject);
<<<<<<< HEAD
    console.log("workshops list before", workshopsList);
=======
    console.log('workshops list before', workshopsList);
>>>>>>> e85a9272875c2086e44930319a6c0055e78e6145
    setTempWorkshop(workshopsList);
  };

  const deleteTempWorkshop = (id) => {
    const workshopList = tempWorkshops.filter((workshop) => workshop.id !== id);
    setTempWorkshop(workshopList);
  };

  const handleFilterDate = (month) => {
    axios.get('/workshops').then((response) => {
      if (month === 'All workshops') {
        setWorkshops(response.data);
        return workshops;
      } else {
        const filterdResult = allWorkshops.filter((workshop) => {
          const workshopMonth = workshop.workshop_month;
          return workshopMonth === month;
        });
        setWorkshops(filterdResult);
        setAllWorkshops(response.data);
      }
    });
  };

<<<<<<< HEAD
  const editTempWorkshop = (newObject) => {
    const workshopsList = [...tempWorkshops];
    const i = workshopsList.findIndex((wrkshop) => wrkshop.id === newObject.id);
    workshopsList.splice(i, 1, newObject);
    console.log(workshopsList);
    setTempWorkshop(workshopsList);
  };
=======
  const handleChangeSearch = (event) => {
    const { value } = event.target;
    console.log(value)
    if(value.length){
      const filteredWorkshops = allWorkshops.filter((workshop) => {
        return workshop.title.toLowerCase().includes(value.toLowerCase()) ||workshop.workshop_speaker.toLowerCase().includes(value.toLowerCase()) ;
      });
      setsearchValue(value)
      setAllWorkshopsCopy(filteredWorkshops);
    } else {
      setsearchValue(value)
      setAllWorkshopsCopy(allWorkshops)
    }
  }
>>>>>>> e85a9272875c2086e44930319a6c0055e78e6145

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
          deleteTempWorkshop,
          months,
<<<<<<< HEAD
        }}
      >
=======
          setTempWorkshop,
          allWorkshopsCopy,
          handleChangeSearch
        }}>
>>>>>>> e85a9272875c2086e44930319a6c0055e78e6145
        {props.children}
      </WorkshopContext.Provider>
    </div>
  );
};
export default WorkshopContextProvider;
