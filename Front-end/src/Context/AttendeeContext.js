import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AttendeeContext = createContext();

const AttendeeContextProvider = (props) => {
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
    axios.get('/users/attendees').then((response) => {
      if (role === 'All attendees') {
        setAttendees(response.data);
        return attendees;
      } else {
        const filterdResult = allAttendees.filter((attendee) => {
          return attendee.role[0].name === role;
        });
        setAttendees(filterdResult);
        setAllattendees(response.data);
      }
    });
  }

  return (
    <div>
      <AttendeeContext.Provider
        value={{ allAttendees, attendees, handleFilterAttendee, speakers }}>
        {props.children}
      </AttendeeContext.Provider>
    </div>
  );
};

export default AttendeeContextProvider;
