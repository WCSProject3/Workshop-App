import React, { useContext } from "react";
import { WorkshopContext } from '../../../Context/WorkshopContext';
import MyWorkshopDetails from './MyWorkshopDetails'


const MyWorkshopList = ({workshops, reachedLimit}) => {
    console.log(workshops)


    return(
        <div className="myWorkshops-list">
            <div className="myWorkshops-list-header">
                {workshops.length > 0 && <p>My workshops - {workshops[0].workshop_month}</p>}
                {reachedLimit && 
                <p className="reached-max-warning">You've reached the maximum workshops</p>}
            </div>
            {workshops.length > 0 &&
            workshops.map(workshop => {
                return <MyWorkshopDetails workshop={workshop}
                key={workshop.id} reachedLimit={reachedLimit}/>
            })}
        </div>
        //workshop.length && <h1>{user.id}</h1>
    )
}

export default MyWorkshopList;