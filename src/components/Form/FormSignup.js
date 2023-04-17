import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>Create your account with HomeConnect!
        </h1>

        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='fName'
            placeholder='Enter your first name'
            value={values.fName}
            onChange={handleChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lName'
            placeholder='Enter your last name'
            value={values.lName}
            onChange={handleChange}
          />
        </div>

        {/* <div className='form-inputs'>
          <label className='form-label'>Class</label>
          <input
            className='form-input'
            type='text'
            name='class'
            placeholder='Enter your class, e.g Grade 12'
            value={values.class}
            onChange={handleChange}
          />
        </div> */}
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Mobile Number</label>
          <input
            className='form-input'
            type='text'
            name='mobileNo'
            placeholder='Enter your mobile number'
            value={values.mobileNo}
            onChange={handleChange}
          />
        </div>

        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>

        <div className = 'error-msg' >
        {errors.fields && <p>{errors.fields}</p>}
        {errors.password && <p>{errors.password}</p>}
        {errors.email && <p>{errors.email}</p>}
        </div>

        <span className='form-input-login'>
          Already have an account? Login <a href='/homeconnect/login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
