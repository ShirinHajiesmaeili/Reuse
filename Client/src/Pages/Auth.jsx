import { Link, Outlet } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='inset-0 z-50 overflow-y-auto h-screen'>
      <div className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        <div className='relative inline-block transform overflow-hidden bg-white rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md'>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <Link to='/'>
              <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'>
                ✕
              </button>
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;