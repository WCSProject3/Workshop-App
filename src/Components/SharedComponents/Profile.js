import React from 'react';
import ChangePhoto from './ProfileSubcomponents/ChangePhoto';
import './Profile.scss'
import EditMyWorkshops from './ProfileSubcomponents/EditMyWorkshops';
import UserSettings from './ProfileSubcomponents/UserSettings';
import ContactSettings from './ProfileSubcomponents/ContactSettings';

const Profile = () => {
    return(
        <div className="profile">
            <div className="left">
              <ChangePhoto />
              <EditMyWorkshops />
            </div>
            <div className="right">
              <UserSettings />
              <ContactSettings />
            </div>
            
        </div>
    )
}

export default Profile