import React, { useContext, useState, useEffect } from 'react';
import { WorkshopContext } from '../../../Context/WorkshopContext';
import { UserContext } from '../../../Context/UserContext';

const MyWorkshopDetails = ({ workshop, reachedLimit }) => {
  console.log('workshop', workshop);

  const { user } = useContext(UserContext);
  const {
    workshops,
    userWorkshops,
    addUserWorkshop,
    deleteUserWorkshop,
    getWorkshops,
  } = useContext(WorkshopContext);

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [percentage, setPercentage] = useState(null);
  const [isExpanded, setIsIsExpanded] = useState(false);

  useEffect(() => {
    userWorkshops.length &&
      userWorkshops.map((userWorkshop) => {
        if (userWorkshop.workshop_id === workshop.id) {
          setIsEnrolled(true);
        }
      });
  }, [userWorkshops]);

  useEffect(() => {
    calcPercentage(workshop.enrolled_attendees, workshop.room_capacity);
  }, [workshops]);

  const calcPercentage = (enrolled, room_capacity) => {
    const percentage = Math.round((enrolled / room_capacity) * 100);
    setPercentage(percentage);
  };

  const handleEnrolled = (enroll) => {
    if (enroll) {
      addUserWorkshop(workshop.id, user.id, workshop.speaker_id);
      getWorkshops();
    } else {
      deleteUserWorkshop(workshop.id, user.id, workshop.speaker_id);
      getWorkshops();
    }
    setIsEnrolled(!isEnrolled);
  };

  const handleIsExpanded = (value) => {
    setIsIsExpanded(value);
  };

  const day =
    workshop.date[8] === '0'
      ? workshop.date.substring(9, 10)
      : workshop.date.substring(8, 10);

  return (
    <div
      className={
        isEnrolled ? 'myWorkshop-details-bg-enrolled' : 'myWorkshop-details'
      }>
      <div className='myWorkshop-basic-info'>
        <div className='myWorkshop-basic-info-left'>
          <p
            className={
              isEnrolled
                ? 'myWorkshop-details-title-enroled'
                : 'myWorkshop-details-title'
            }>
            {workshop.title}
          </p>
          <div className='myWorkshop-details-date'>
            <p
              className={
                isEnrolled ? 'enroled' : 'myWorkshop-details-day'
              }>{`${workshop.workshop_month} ${day}`}</p>
            <div className={isEnrolled ? 'dot-enroled' : 'dot'} />
            <p
              className={
                isEnrolled ? 'enroled' : 'myWorkshop-details-hour'
              }>{`Time: ${workshop.starting_hour.substring(
              0,
              5
            )} - ${workshop.ending_hour.substring(0, 5)}`}</p>
          </div>
        </div>
        <div className='myWorkshop-basic-info-right'>
          <div className='myWorkshops-room-capacity'>
            <div className='myWorkshops-room-capacity-info'>
              <p
                className={
                  isEnrolled ? 'enroled' : 'myWorkshops-room-capacity-title'
                }>
                Room Capacity
              </p>
              {percentage !== null && (
                <p
                  className={
                    isEnrolled ? 'enroled' : 'myWorkshops-room-capacity-title'
                  }>
                  {percentage}%
                </p>
              )}
            </div>
            <div className='progress-bar enroled'>
              {percentage !== null && (
                <div
                  className='progress-bar-fill'
                  style={{ width: `${percentage}%` }}
                />
              )}
            </div>
          </div>
          <div className='myWorkshop-btn'>
            <p
              className={
                workshop.status_open ? 'status-open' : 'status-closed'
              }>
              {workshop.status_open ? 'Open' : 'Closed'}
            </p>
            {isEnrolled ? (
              <button
                className='myWorkshop-handle-not-enrolled'
                onClick={() => handleEnrolled(false)}>
                uneroll
              </button>
            ) : (
              workshop.status_open !== 0 && (
                <button
                  className={
                    reachedLimit
                      ? 'myWorkshop-handle-enrolled-disabled'
                      : 'myWorkshop-handle-enrolled'
                  }
                  onClick={() => handleEnrolled(true)}>
                  enroll
                </button>
              )
            )}
            {isExpanded ? (
              <button
                className='myWorkshop-handle-expanded-closed'
                onClick={() => handleIsExpanded(false)}>
                show less
              </button>
            ) : (
              <button
                className='myWorkshop-handle-expanded-open'
                onClick={() => handleIsExpanded(true)}>
                show more
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          isExpanded
            ? isEnrolled
              ? 'myWorkshop-show-enroled'
              : 'myWorkshop-show-not-enroled'
            : 'myWorkshop-hide'
        }>
        <h3>{workshop.workshop_speaker}</h3>
        <p>{workshop.description}</p>
      </div>
    </div>
    //workshop.length && <h1>{user.id}</h1>
  );
};

export default MyWorkshopDetails;
