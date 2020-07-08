import React, { useContext, useState, useEffect } from "react";
import { WorkshopContext } from '../../Context/WorkshopContext';
import { UserContext } from '../../Context/UserContext';
import MyWorkshopList from './AttendeeSubComponents/MyWorkshopList'
import './MyWorkshops.scss'

const MyWorkshops = () => {

    const { workshops, getWorkshops, months, userWorkshops } = useContext(WorkshopContext);
    const { user } = useContext(UserContext);

    console.log("USER USER USER WORKSHOPS", userWorkshops)

    const [workshopList, setWorkshopList] = useState([])
    const [active, setActive] = useState("")
    const [reachedLimit, setReachedLimit] = useState(false)

    useEffect(() => {
        if(userWorkshops.length > 0){
            checkLimit()
            getWorkshops()
        }
    },[userWorkshops])

    useEffect(() => {
        if(months.length > 0){
            monthlyWorkshops(months[0].month)
            setActive(months[0].month)
        }
    },[months])

    //useEffect(() => {
    //    if(months.length > 0){
    //        monthlyWorkshops(active)
    //        setActive(active)
    //    }
    //},[workshops])

    const monthlyWorkshops = (month) => {
        const monthlyWorkshopList = workshops.filter(workshop => {
            return workshop.workshop_month === month
        })
        setWorkshopList(monthlyWorkshopList)
        setActive(month)
    }

    const checkLimit = () => {
        if(user.max_workshops > userWorkshops.length){
            setReachedLimit(false)
        } else {
            setReachedLimit(true)
        }
    }

    return(
        <div>
            <div className="myWorkshops-header">
                <h1>My Workshops</h1>
                {months.length > 0 && 
                    months.map(month => {
                        return <button className={active === month.month ?"myWorkshops-month-btn active": "myWorkshops-month-btn" } onClick={() => monthlyWorkshops(month.month)}>{month.month}</button>
                })}
            </div>
            <MyWorkshopList workshops={workshopList} reachedLimit={reachedLimit} />
        </div>
    )
}

export default MyWorkshops;