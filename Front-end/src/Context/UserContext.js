import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [attendees, setAttendees] = useState([]);
  const [allAttendees, setAllattendees] = useState([]);
  const [allAttendeesCopy, setAllattendeesCopy] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [searchValue, setsearchValue] = useState('')
  const [user, setUser] = useState([])

  useEffect(() => {
    getSpeakers();
    getAttendees();
    getAllUsers();
  }, []);

  const getSpeakers = () => {
    axios
      .get('/users/speakers')
      .then((response) => response.data)
      .then((speakersList) => {
        setSpeakers(speakersList)
      })
  };

  const getAttendees = () => {
    axios
      .get('/users/attendees')
      .then((response) => response.data)
      .then((attendeesList) => {
        setAttendees(attendeesList)
      })
  };

  const getAllUsers = () => {
    axios
      .get('/users')
      .then((response) => response.data)
      .then((allUsersList) => {
        setAllattendees(allUsersList)
        setAllattendeesCopy(allUsersList)
      })
  };

  const getUser = (id) => {
    axios
      .get(`/users/${id}`)
      .then((response) => response.data)
      .then((user) => {
        setUser(user[0])
      })
  };

  function handleFilterAttendee(role) {
    axios.get('/users').then((response) => {
      if (role === 'All attendees') {
        setAttendees(response.data);
        return attendees;
      } else {
        const filterdResult = allAttendees.filter((attendee) => {
          return attendee.role_id === role;
        });
        setAttendees(filterdResult);
        setAllattendees(response.data);
      }
    });
  }

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    console.log(value)
    if(value.length){
      const filteredUsers = allAttendees.filter((attendee) => {
        const name = `${attendee.firstname} ${attendee.lastname}`
        return name.toLowerCase().includes(value.toLowerCase());
      });
      setsearchValue(value)
      setAllattendeesCopy(filteredUsers);
    } else {
      setsearchValue(value)
      setAllattendeesCopy(allAttendees)
    }
  }

  const deleteUser = (id, role) => {
    console.log("id", id)
    if(role === "speaker"){
      axios
        .delete(`/workshops/${id}`)
        .then((response) => console.log(response))
        .then(() => {
          axios
          .delete(`/users/${id}`)
          .then((response) => console.log(response))
        })
    }
    axios
      .delete(`/users/${id}`)
      .then((response) => console.log(response))

      getAllUsers()
  }
  

  return (
    <div>
      <UserContext.Provider
        value={{ allAttendees, attendees, handleFilterAttendee, speakers, allAttendeesCopy,searchValue, handleChangeSearch, deleteUser, user, getUser }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
