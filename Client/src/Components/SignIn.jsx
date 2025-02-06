import { Link } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { signIn } from '../data/authentication';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    setIsLoading(true);

    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const userDetails = await signIn(data);
      setUser(userDetails);
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className='text-center text-3xl font-extrabold text-gray-900'>
        Sign In
      </h2>
      <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
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
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Link to='/auth/forgotpassword'>
            <button
              type='button'
              className='text-sm text-teal-600 hover:text-teal-500'
            >
              Forgot password?
            </button>
          </Link>
        </div>

        <button
          disabled={isLoading}
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
        >
          Sign In
        </button>

        <div className='text-center'>
          <Link to='/auth/signup'>
            <button
              type='button'
              className='text-sm text-teal-600 hover:text-teal-500'
            >
              Don&apos;t have an account? Sign Up
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;