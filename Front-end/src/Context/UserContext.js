import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [attendees, setAttendees] = useState([]);
  const [allAttendees, setAllattendees] = useState([]);
  const [speakers, setSpeakers] = useState([]);

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

  return (
    <div>
      <UserContext.Provider
        value={{ allAttendees, attendees, handleFilterAttendee, speakers }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
