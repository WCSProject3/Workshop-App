import React from 'react';
import NavBar from '../SharedComponents/NavBar';
import { BrowserRouter } from 'react-router-dom';

const Admin = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
    </BrowserRouter>
  );
};
export default Admin;
