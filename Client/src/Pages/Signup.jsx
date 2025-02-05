import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    city: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords don't match");
    }

    // Post the data
    fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }
        // Redirect to signin page after successful signup
        window.location.href = '/signin';
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='inset-0 z-50 overflow-y-auto h-screen'>
      <div className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          onClick={onClose}
        />
        <div className='relative inline-block transform overflow-hidden bg-white rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md'>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <Link to='/'>
              <button
                onClick={onClose}
                className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
              >
                ✕
              </button>
            </Link>
            <h2 className='text-center text-3xl font-extrabold text-gray-900'>
              Create Account
            </h2>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
              <div className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City
                  </label>
                  <input
                    id='city'
                    name='city'
                    type='text'
                    required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='zipCode'
                    className='block text-sm font-medium text-gray-700'
                  >
                    ZIP Code
                  </label>
                  <input
                    id='zipCode'
                    name='zipCode'
                    type='text'
                    required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Confirm Password
                  </label>
                  <input
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    required
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
              >
                Create Account
              </button>

              <div className='text-center'>
                <Link to="/signin" className='text-sm text-teal-600 hover:text-teal-500'>
                  Already have an account? Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;