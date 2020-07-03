import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.scss';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //run validation
    axios
      .post('/auth/login', data)
      .then((response) => console.log(response.data));
    //redirect to role-based view
  };

  return (
    <div className='login-page-container'>
      <div className='login-container'>
        <div className='login-img' />
        <div className='right-side-container'>
          <h1>Welcome to productized</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name='email'
              type='text'
              placeholder='Email Address'
              ref={register}
            />
            <input
              name='password'
              type='password'
              placeholder='Password'
              ref={register}
            />
            <button type='submit'>Login</button>
            <hr />
          </form>
          <p>Forgot your account?</p>
          <p>Already have an account? Login!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
