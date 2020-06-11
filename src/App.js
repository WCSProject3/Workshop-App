import React from 'react';
import AllWorkshops from './Components/Admin/AllWorkshops';
import WorkshopContextProvider from './Context/WorkshopContext';

function App() {
  return (
    <div className="App">
      <WorkshopContextProvider>
        <AllWorkshops /> 
      </WorkshopContextProvider>
    </div>
  );
}

export default App;
