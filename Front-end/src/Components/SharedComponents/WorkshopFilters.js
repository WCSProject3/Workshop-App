import React, { useContext } from 'react';
import { WorkshopContext } from '../../Context/WorkshopContext';

const WorkshopFilters = () => {

    const { allWorkshops, handleFilterDate, months } = useContext(WorkshopContext);


    console.log(months)

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
                      {months.map(month => {
                              return ( 
                              <option
                              key={month.months}
                              value={month.months}
                              >
                                  {month.months}
                              </option>
                              )
                      })}
                  </select>
                </div>
            </div>
        );
}

 
export default WorkshopFilters;