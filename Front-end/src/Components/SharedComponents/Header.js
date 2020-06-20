import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AttendeeContext } from '../../Context/AttendeeContext'; //context to add state
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      {/* Tranform into useForm // Can be called as separate component? */}
      <form>
        <input id="searchbar" type='search' placeholder='Search for ...' />
        <input id="searchbtn" type='submit' value='&#128269;&#xFE0E;' />
      </form>
      

      {/* To be generated dynamicaly, connected to login state */}
      <div className="user">
        <p>Zé Arnaldo</p>
        <Link to='/Profile'>
          <img src='avatar5.jpeg' alt='Zé Arnaldo' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
