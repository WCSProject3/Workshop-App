import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.scss';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    //run validation
    axios
      .post('/auth/register', data)
      .then((response) => console.log(response.data));
    reset();
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
              ref={register({ required: true })}
            />
            <input
              name='firstname'
              type='text'
              placeholder='First name'
              ref={register({ required: true })}
            />
            <input
              name='lastname'
              type='text'
              placeholder='Last name'
              ref={register({ required: true })}
            />
            <input
              name='company'
              type='text'
              placeholder='Company'
              ref={register}
            />
            <input
              name='position'
              type='text'
              placeholder='Position'
              ref={register}
            />
            <input
              name='country'
              type='text'
              placeholder='Country'
              ref={register({ required: true })}
            />
            <input
              name='password'
              type='password'
              placeholder='Password'
              ref={register({ required: true, maxLength: 80 })}
            />
            <input
              name='role_id'
              type='hidden'
              value='3'
              contentEditable={false}
              ref={register}
            />
            <button type='submit'>Register</button>
            <hr />
          </form>
          {/* <Link to='/Login'></Link> */}
          <p>Already have an account? Login!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
