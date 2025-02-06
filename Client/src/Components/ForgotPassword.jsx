
import { Link } from "react-router";


const ForgotPassword = () => {
  const handleSubmit = () => {};

  return (
    <>
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
        Reset Password
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Enter your email address and we&apos;ll send you instructions to reset
        your password.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"

          >
            Email address
          </label>
          <input

            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Send Reset Instructions
        </button>
        <div className="text-center">
          <Link to="/auth">
            <button
              type="button"
              className="text-sm text-teal-600 hover:text-teal-500"

            >
              Back to Sign In
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};


export default ForgotPassword;

