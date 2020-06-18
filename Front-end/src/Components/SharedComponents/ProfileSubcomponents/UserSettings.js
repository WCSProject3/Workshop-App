import React from 'react';
import { useForm } from 'react-hook-form';

const UserSettings = () => {

    const {register, handleSubmit, errors, watch} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        //edit user in the database
    }
    
    return(
        <div>
            <div className="title">User Settings</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  ref={register} />
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  ref={register} />
                <label htmlFor="firstname">First Name</label>
                <input
                  name="firstname"
                  id="firstname"
                  type="text"
                  ref={register} />
                <label htmlFor="lastname">Last Name</label>
                <input
                  name="lastname"
                  id="lastname"
                  type="text"
                  ref={register} />
                <button type="submit">Save Settings</button>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="change-password">Change Password</label>
                <input
                  name="change-password"
                  id="change-password"
                  type="text"
                  ref={register} />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  name="confirm-password"
                  id="confirm-password"
                  type="text"
                  ref={register} />
                <button type="submit">Save Password</button>
            </form>
        </div>
    );
}

export default UserSettings;