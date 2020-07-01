import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import uuid from 'react-uuid';
import { UserContext } from '../../../Context/UserContext';

const WorkshopForm = () => {
  const { addTempWorkshop } = useContext(WorkshopContext);
  const { speakers } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newObject = {
      id: uuid(),
      title: data.title,
      status_open: data.status_open,
      date: data.date,
      starting_hour: data.starting_hour,
      ending_hour: data.ending_hour,
      description: data.description,
      speaker: data.speaker,
      room: data.room,
      room_capacity: data.room_capacity,
      room_manager: data.room_manager,
      room_type: data.room_type,
    };
    addTempWorkshop(newObject);
    console.log(newObject);
  };

  console.log(speakers);

  return (
    <form className='new-workshop-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='new-workshop-form-header'>
        <input type='date' placeholder='date' name='date' ref={register} />
        <div className='hour-label-input'>
          <label htmlFor='starting_hour'>starting at</label>
          <input
            id='starting_hour'
            type='time'
            placeholder='hour'
            name='starting_hour'
            ref={register}
          />
        </div>
        <div className='hour-label-input'>
          <label htmlFor='ending_hour'>finishing at</label>
          <input
            id='ending_hour'
            type='time'
            placeholder='hour'
            name='ending_hour'
            ref={register}
          />
        </div>
      </div>
      <div className='new-workshop-form-body'>
        <div className='new-workshop-form-left'>
          <input type='text' placeholder='Title' name='title' ref={register} />
          <select name='speaker' ref={register}>
            {speakers.map((speaker) => {
              return (
                <option
                  value={`${speaker.firstname} ${speaker.lastname}`}>{`${speaker.firstname} ${speaker.lastname}`}</option>
              );
            })}
          </select>
          <input
            type='text'
            placeholder='Description'
            name='description'
            ref={register}
          />
        </div>
        <div className='new-workshop-form-right'>
          <input type='text' placeholder='Room' name='room' ref={register} />
          <input
            type='text'
            placeholder='Room Manager'
            name='room_manager'
            ref={register}
          />
          <div className='new-workshop-form-selects'>
            <select name='room_type' ref={register}>
              <option value='Banquet'>Banquet</option>
              <option value='Classroom'>Classroom</option>
            </select>
            <select name='room_capacity' ref={register}>
              <option value='10'>10 pax</option>
              <option value='20'>20 pax</option>
              <option value='30'>30 pax</option>
              <option value='40'>40 pax</option>
              <option value='50'>50 pax</option>
              <option value='60'>60 pax</option>
            </select>
            <select name='status_open' ref={register}>
              <option value='1'>Open</option>
              <option value='0'>Closed</option>
            </select>
          </div>
        </div>
      </div>
      <div className='new-workshop-form-footer'>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default WorkshopForm;
