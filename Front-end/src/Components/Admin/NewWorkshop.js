import React, { useContext, useState } from "react";
import WorkshopForm from "./NewWorkshopSubComponents/WorkshopForm";
import { WorkshopContext } from "../../Context/WorkshopContext";
import { UserContext } from "../../Context/UserContext";
import TempWorkshopInfo from "./NewWorkshopSubComponents/TempWorkshopInfo";
import { Link } from "react-router-dom";
import "./NewWorkshop.scss";
import MessageModal from "./Modals/MessageModal";

const NewWorkshop = () => {
  const { tempWorkshops, setTempWorkshop, confirmWorkshop } = useContext(
    WorkshopContext
  );

  const [isMessageModalDisplayed, setMessageModalVisibility] = useState(false);

  const toggleMessageModal = () => {
    setMessageModalVisibility(true);
    setTimeout(() => setMessageModalVisibility(false), 1500);
    console.log("ITS WORKING");
  };

  const { speakers } = useContext(UserContext);
  console.log("speakers",speakers)

  const handleConfirmAllWorkshops = () => {
    tempWorkshops.map((tempWorkshop) => {
      const speaker_id = speakers.filter((speaker) => {
        return (
          `${speaker.firstname} ${speaker.lastname}` === tempWorkshop.speaker
        );
      });
      const room_type_id = tempWorkshop.room_type === "Banquet" ? 1 : 2;

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
    <div className="new-workshops-body">
      <div className="new-workshops-header">
        <h1>New Workshops</h1>
        <button className='all-workshops-btn'>
          <Link to='/admin'>All Workshops</Link>
        </button>
        <div>
          {isMessageModalDisplayed && (
            <MessageModal content="Your Workshop was successfully added" />
          )}
        </div>
        <button className="confirm-all-btn" onClick={handleConfirmAllWorkshops}>
          Confirm All
        </button>
      </div>
      {tempWorkshops.map((tempWorkshop) => {
        return (
          <TempWorkshopInfo
            tempWorkshop={tempWorkshop}
            key={tempWorkshop.title}
            toggleMessageModal={toggleMessageModal}
          />
        );
      })}
      <WorkshopForm />
      {/*<NewRoomForm />*/}
    </div>
  );
};

export default NewWorkshop;
