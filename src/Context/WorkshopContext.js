import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WorkshopContext = createContext();

const WorkshopContextProvider = (props) => {

    const [ workshops, setWorkshops ] = React.useState([]);

    useEffect(() => {
    axios.get('dummyData.json')
    .then(response => setWorkshops(response.data.workshops))
    }
    , []);

return ( 
    <div>
       <WorkshopContext.Provider
       value={{workshops}}>
           {props.children}
       </WorkshopContext.Provider>
    </div>
);
}
 
export default WorkshopContextProvider;