import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='#'>
      <div className='#'>
        <div>
          <Link className='#' to='/'>
            <img className='#' src='' alt='logo' />
          </Link>
        </div>
        <div className='#'>
          <ul className='#'>
            <li className='#'>
              <Link className='#' to='/AllWorkshops'>
                ALL WORKSHOPS
              </Link>
            </li>
            <li className='#'>
              <p>MONTH X</p>
              <ul>
                <li>
                  <p>Day X</p>
                  <ul>
                    <li>
                      <p>Morning</p>
                      <Link className='#' to='/AttendeeDetails'>
                        Speaker X
                      </Link>
                    </li>
                    <li>
                      <p>Afternoon</p>
                      <Link className='#' to='/AttendeeDetails'>
                        Speaker Y
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='#'>
              <Link className='#' to='/AllRegistrations'>
                ALL DATA
              </Link>
            </li>
            <li className='#'>
              <Link className='#' to='/NotificationsList'>
                NOTIFICATIONS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
