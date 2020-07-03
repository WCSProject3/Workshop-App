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
  const [userWorkshops, setUserWorkshops] = useState([])



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
        setAllWorkshopsCopy(workshopsList);
      });
  };

  const getUserWorkshops = (id) => {
    axios
      .get(`/workshops/user-workshops/${id}`)
      .then((response) => response.data)
      .then((userWorkshops) => {
        setUserWorkshops(userWorkshops);
      });
  }

  const addUserWorkshop = (workshopId, userId) => {

    const user_workshop = {workshop_id: workshopId , user_id: userId}
    axios
      .post('/workshops/user-workshops', user_workshop)
      .then((response) => response.data)
      .then((userWorkshops) => {
        setUserWorkshops(userWorkshops);
      });
    getWorkshops()
  }


  const deleteUserWorkshop = (workshopId, userId) => {

    const user_workshop = [workshopId, userId]
    console.log("user_workshop",user_workshop)
    axios
      .delete('/workshops/user-workshops', { data: user_workshop } )
      .then((response) => response.data)
      .then((userWorkshops) => {
        setUserWorkshops(userWorkshops);
    });
    getWorkshops()
  }

  console.log(allWorkshops)

  const getMonth = () => {
    axios
      .get('/workshops/months')
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
      .post('/workshops', newObject)
      .then((response) => console.log(response));

    getWorkshops();
  };

  const editTempWorkshop = (newObject) => {
    const workshopsList = [...tempWorkshops];
    const i = workshopsList.findIndex((wrkshop) => wrkshop.id === newObject.id);
    workshopsList.splice(i, 1, newObject);
    console.log('workshops list before', workshopsList);
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
          setTempWorkshop,
          allWorkshopsCopy,
          handleChangeSearch,
          getUserWorkshops,
          userWorkshops,
          addUserWorkshop,
          deleteUserWorkshop,
          getWorkshops
        }}>
        {props.children}
      </WorkshopContext.Provider>
    </div>
  );
};
export default WorkshopContextProvider;
