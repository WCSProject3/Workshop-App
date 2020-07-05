import React, { useContext } from 'react';
import { WorkshopContext } from '../../Context/WorkshopContext';
import SearchBar from './SearchBar'

const WorkshopFilters = () => {

    const { handleFilterDate, months, handleWorkshopSearch, searchWorkshopValue, dateFilter } = useContext(WorkshopContext);


        return (  
            <div className="workshop-filters">
                <div className="filter-select">
                    <SearchBar handleChange={handleWorkshopSearch} searchValue={searchWorkshopValue} />
                </div>
                <div className="filter-select">
                  <label>Filter by Date </label>
                  <select value={dateFilter} onChange={handleFilterDate}>
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