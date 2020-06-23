import React, { useContext } from 'react';
import { WorkshopContext } from '../../Context/WorkshopContext';

const WorkshopFilters = () => {

    const { allWorkshops, handleFilterDate } = useContext(WorkshopContext);

        return (  
            <div className="workshop-filters">
                <div className="filter-select">
                  <label>Show</label>
                  <select>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>all</option>
                  </select>
                </div>
                <div className="filter-select">
                  <label>Filter by Date </label>
                  <select onChange={(event) => handleFilterDate(event.target.value)  }>
                      <option
                          value={'All workshops'}>
                          All workshops
                      </option>
                      {allWorkshops.map(workshop => {
                              return ( 
                              <option
                              key={workshop.id}
                              value={workshop.date}
                              >
                                  {workshop.date}
                              </option>
                              )
                      })}
                  </select>
                </div>
            </div>
        );
}

 
export default WorkshopFilters;