import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.scss'

const SignUp = () => {

    const {register, handleSubmit, errors, watch} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log(data)
        //add user to the database
        //redirect user to role-based view
    }

    return (
        <div className="signUp-page-container">
          <div className="signUp-container">
            <div className="signUp-img"/>
            <div className="signUp-right-side-container">
              <h1>Create an Account</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="name">
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
                </div>
                <div className="comp-country">
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
                </div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email Address"
                  ref={register({required: "Email is required"})}
                />
                <div className="password">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register({
                      required: "Password is required", 
                      minLength: {value: 8, message: "minimum 8 characters"}}  )  } 
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    ref={register({
                      validate: value => 
                      value === password.current || "The passwords don't   match"
                  })} 
                  />
                  {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </div>
                
                <select name="role" ref={register}>
                    <option value="attendee">attendee</option>
                    <option value="speaker">speaker</option>
                </select>
                <button type="submit">Register Account</button>
                <hr/>
              </form>
              <p>Forgot your account?</p>
              <p>Create an account</p>
            </div>
          </div>
        </div>
       
        
    )

}

export default SignUp