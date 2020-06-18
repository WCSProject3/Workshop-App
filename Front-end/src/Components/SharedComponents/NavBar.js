import React, { useContext } from 'react';
import { AttendeeContext } from '../../Context/AttendeeContext';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const { speakers } = useContext(AttendeeContext);

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
            <img src='chevron-right-1.png' className='arrow' />
          </label>

          <ul>
            <li>
              <div className='sub-item'>
                <input type='checkbox' id='A-A' />
                <label htmlFor='A-A'>
                  SEPTEMBER
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
                  <img src='chevron-right-1.png' className='arrow' />
                </label>

                <ul>{speakersList}</ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='item'>
          <Link to='/'>ALL DATA</Link>
        </div>
        <div className='item'>
          <Link to='/'>NOTIFICATIONS</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
