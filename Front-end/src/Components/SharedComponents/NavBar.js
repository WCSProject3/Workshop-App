import React, { useContext } from 'react';
import { AttendeeContext } from '../../Context/AttendeeContext';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const { speakers } = useContext(AttendeeContext);

  //to be generated with database instead of dummy data (coming from AttendeeContext)
  const speakersList = speakers.map((speaker) => {
    return (
      <li>
        <Link to='/AttendeeDetails'>
          {`${speaker.firstname} ${speaker.lastname}`}
        </Link>
      </li>
    );
  });

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
            <li>
              <div className='sub-item'>
                <input type='checkbox' id='A-A' />
                <label htmlFor='A-A'>
                  SEPTEMBER
                  {/* add animation */}
                  <img src='chevron-right-1.png' className='arrow' />
                </label>

                <ul>{speakersList}</ul>
              </div>
            </li>
            <li>
              <div className='sub-item'>
                <input type='checkbox' id='A-B' />
                <label htmlFor='A-B'>
                  OCTOBER
                  {/* add animation */}
                  <img src='chevron-right-1.png' className='arrow' />
                </label>

                <ul>{speakersList}</ul>
              </div>
            </li>
            <li>
              <div className='sub-item'>
                <input type='checkbox' id='A-C' />
                <label htmlFor='A-C'>
                  NOVEMBER
                  {/* add animation */}
                  <img src='chevron-right-1.png' className='arrow' />
                </label>

                <ul>{speakersList}</ul>
              </div>
            </li>
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
