import React from 'react';
import WorkshopAttendees from './Components/Admin/WorkshopAttendees';
import AttendeeContextProvider from './Context/AttendeeContext';

function App() {
  return (
    <div className="App">
      <AttendeeContextProvider>
      <WorkshopAttendees /> 
      </AttendeeContextProvider>
    </div>
  );
}

export default App;
