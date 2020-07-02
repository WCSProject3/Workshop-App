import React, { useContext } from 'react';
import { WorkshopContext } from '../../Context/WorkshopContext';
import SearchBar from './SearchBar'

const WorkshopFilters = () => {

    const { allWorkshops, handleFilterDate, months, handleChangeSearch, searchValue } = useContext(WorkshopContext);


    console.log(months)

        return (  
            <div className="workshop-filters">
                <div className="filter-select">
                    <SearchBar handleChange={handleChangeSearch} searchValue={searchValue} />
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