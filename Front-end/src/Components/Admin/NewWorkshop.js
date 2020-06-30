import React, { useContext } from 'react';
import WorkshopForm from './NewWorkshopSubComponents/WorkshopForm';
import { WorkshopContext } from '../../Context/WorkshopContext';
import { UserContext } from '../../Context/UserContext';
import TempWorkshopInfo from './NewWorkshopSubComponents/TempWorkshopInfo';
import { Link } from 'react-router-dom';
import './NewWorkshop.scss';

const NewWorkshop = () => {
  const { tempWorkshops, setTempWorkshop, confirmWorkshop } = useContext(
    WorkshopContext
  );
  const { speakers } = useContext(UserContext);

  const handleConfirmAllWorkshops = () => {
    tempWorkshops.map((tempWorkshop) => {
      const speaker_id = speakers.filter((speaker) => {
        return (
          `${speaker.firstname} ${speaker.lastname}` === tempWorkshop.speaker
        );
      });
      const room_type_id = tempWorkshop.room_type === 'Banquet' ? 1 : 2;

      const newObject = {
        title: tempWorkshop.title,
        status_open: tempWorkshop.status_open,
        date: tempWorkshop.date,
        starting_hour: tempWorkshop.starting_hour,
        ending_hour: tempWorkshop.ending_hour,
        description: tempWorkshop.description,
        speaker_id: speaker_id[0].id,
        room: tempWorkshop.room,
        room_capacity: tempWorkshop.room_capacity,
        room_manager: tempWorkshop.room_manager,
        room_type_id: room_type_id,
      };

      confirmWorkshop(newObject);
      setTempWorkshop([]);
    });
  };

  return (
    <div className='new-workshops-body'>
      <div className='new-workshops-header'>
        <h1>New Workshops</h1>
        <button className='all-workshops-btn'>
          <Link to='/'>All Workshops</Link>
        </button>
        <button className='confirm-all-btn' onClick={handleConfirmAllWorkshops}>
          Confirm All
        </button>
      </div>
      {tempWorkshops.map((tempWorkshop) => {
        return (
          <TempWorkshopInfo
            tempWorkshop={tempWorkshop}
            key={tempWorkshop.title}
          />
        );
      })}
      <WorkshopForm />
      {/*<NewRoomForm />*/}
    </div>
  );
};

export default NewWorkshop;
