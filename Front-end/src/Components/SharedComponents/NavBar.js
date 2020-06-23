import React, { useContext } from 'react';
import { AttendeeContext } from '../../Context/AttendeeContext';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { WorkshopContext } from '../../Context/WorkshopContext';

import MonthlySpeakers from './MonthlySpeakers'
const NavBar = () => {
  const { speakers } = useContext(AttendeeContext);
  const { months } = useContext(WorkshopContext);

  //to be generated with database instead of dummy data (coming from AttendeeContext)
  const speakersList = speakers.map((speaker) => {
    console.log(speaker.firstname, speaker.lastname);
    return (
      <li>
        <Link to='/AttendeeDetails'>
          {`${speaker.firstname} ${speaker.lastname}`}
        </Link>
      </li>
    );
  });

  console.log(months)

  // Months will also be generated dynamicaly with backend

  return (
    <div className='nav'>
      <div className='multi-level'>
        <div className='item'>
          <img src='Logo_productized.png' className='logo' />
        </div>
        <div className='item'>
          <Link to='/'>ALL WORKSHOPS</Link>
        </div>
        <div className='item'>
          <input type='checkbox' id='A' />
          <label htmlFor='A'>
            WORKSHOPS BY MONTH
            {/* add animation */}
            <img src='chevron-right-1.png' className='arrow' />
          </label>

          <ul>
            {months.map(month => {
              return(
              <li>
                <div className='sub-item'>
                  <input type='checkbox' id={month.months} />
                  <label htmlFor={month.months}>
                    {month.months}
                    {/* add animation */}
                    <img src='chevron-right-1.png' className='arrow' />
                 </label>
                 <ul>
                  <MonthlySpeakers month={month.months}/>
                 </ul>
                </div>
              </li>
              )
            })}
          </ul>
        </div>
        <div className='item'>
          <Link to='/all-registrations'>ALL DATA</Link>
        </div>
        <div className='item'>
          <Link to='/all-notifications'>NOTIFICATIONS</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
