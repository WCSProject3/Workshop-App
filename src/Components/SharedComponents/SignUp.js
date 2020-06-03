import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstname" type="text" placeholder="First Name" ref={register} />
            <input name="lastname" type="text" placeholder="Last Name" ref={register} />
            <input name="company" type="text" placeholder="Company" ref={register} />
            <input name="country" type="text" placeholder="Coutry" ref={register} />
            <input name="email" type="text" placeholder="Email Address" ref={register} />
            <input name="password" type="text" placeholder="Password" ref={register} />
            <input name="confirmPassword" type="text" placeholder="Confirm Password" ref={register} />
            <input type="submit"/>
        </form>
    )

}

export default SignUp