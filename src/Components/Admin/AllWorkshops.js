import React from 'react';

const AllWorkshops = () => {
    return ( 
        <WorkshopContextProvider>
            <WorkshopFilters />
            <WorkshopList />
            <WorkshopInfo /> 
        </WorkshopContextProvider>
     );
}
 
export default AllWorkshops;