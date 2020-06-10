import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WorkshopContext = createContext();

const WorkshopContextProvider = (props) => {

    const [ workshops, setWorkshops ] = useState([]);
    const [ allWorkshops, setAllWorkshops ] = useState([]);

    useEffect(() => {
        axios.get('dummyData.json')
        .then(response => setWorkshops(response.data.workshops))
        axios.get('dummyData.json')
        .then(response => setAllWorkshops(response.data.workshops))
    }
    , []);

    function handleFilterDate(date) {
        axios.get('dummyData.json')
        .then(response => {
            if(date === 'All workshops') {
                setWorkshops(response.data.workshops)
                    return workshops
            } else {
                const filterdResult = allWorkshops
                .filter(workshop => {
                    return workshop.date === date
                })
                setWorkshops(filterdResult)
                setAllWorkshops(response.data.workshops)
            }
        }
            

           
        )
        // axios.get('dummyData.json')
        // .then(response => {
        //     if (

        //     ) 
        //     return 
        //     else if (
            
        //     )
        //     return
        // })
    }
    



return ( 
    <div>
       <WorkshopContext.Provider value={{allWorkshops, workshops, handleFilterDate}}>
           {props.children}
       </WorkshopContext.Provider>
    </div>
)
}
 
export default WorkshopContextProvider;