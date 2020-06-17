import React from 'react';
import { useForm } from 'react-hook-form';

const ContactSettings = () => {

    const {register, handleSubmit, errors, watch} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        //update user contact settings in the database
    }

    return(
        <div>
            <div className="title" >Contact Settings</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                      name="country"
                      id="country"
                      type="text"
                      ref={register} />
                    <label htmlFor="company">Company</label>
                    <input
                      name="company"
                      id="company"
                      type="text"
                      ref={register} />
                </div>
                <div>
                    <label htmlFor="position">Position</label>
                    <input
                      name="position"
                      id="position"
                      type="text"
                      ref={register} />
                    <label htmlFor="user-type">User Type</label>
                    <select name="role" id="user-type" ref={register}>
                        <option value="attendee">attendee</option>
                        <option value="speaker">speaker</option>
                    </select>
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
}

export default ContactSettings;