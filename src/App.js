import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/SharedComponents/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
