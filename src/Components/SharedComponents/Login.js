import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              ref={register} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register} />
            <button type="submit">Login</button>
        </form>
    )

}

export default Login