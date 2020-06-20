import React from 'react';
import { useForm } from 'react-hook-form';

const UserSettings = () => {

    const {register, handleSubmit, errors, watch} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        //edit user in the database
    }
    
    return(
        <div className="user-settings">
          <h2 className="user-settings-title">User Settings</h2>
          <form className="user-settings-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="username-email">
              <div className="label-input">
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  ref={register} />
              </div>
              <div className="label-input">
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  ref={register} />
              </div>
            </div>
            <div className="name">
              <div className="label-input">
                <label htmlFor="firstname">First Name</label>
                <input
                  name="firstname"
                  id="firstname"
                  type="text"
                  ref={register} />
              </div>
              <div className="label-input">
                <label htmlFor="lastname">Last Name</label>
                <input
                  name="lastname"
                  id="lastname"
                  type="text"
                  ref={register} />
              </div>
            </div>
            <button type="submit">Save Settings</button>
          </form>
          <form className="password-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="password">
              <div className="label-input">
                <label htmlFor="change-password">Change Password</label>
                <input
                  name="change-password"
                  id="change-password"
                  type="text"
                  ref={register} />
              </div>
                <div className="label-input">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    name="confirm-password"
                    id="confirm-password"
                    type="text"
                    ref={register} />
                </div>
            </div>
              <button type="submit">Save Password</button>
          </form>
        </div>
    );
}

export default UserSettings;