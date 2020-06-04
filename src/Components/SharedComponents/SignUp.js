import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const {register, handleSubmit, errors, watch} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log(data)
        console.log(password.current)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="firstname"
              type="text"
              placeholder="First Name"
              ref={register({
                required: "First Name is required"})}
            />
            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              ref={register({required: "Last Name is required"})}
            />
            <input
              name="company"
              type="text"
              placeholder="Company"
              ref={register}
            />
            <input
              name="country"
              type="text"
              placeholder="Coutry"
              ref={register}
            />
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              ref={register({required: "Email is required"})}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({
                required: "Password is required", 
                minLength: {value: 8, message: "minimum 8 characters"}})} 
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              ref={register({
                validate: value => 
                value === password.current || "The passwords don't match"
            })} 
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <select name="role" ref={register}>
                <option value="role">please choose your role</option>
                <option value="attendee">attendee</option>
                <option value="speaker">speaker</option>
            </select>
            <button type="submit">Create Account</button>
        </form>
    )

}

export default SignUp