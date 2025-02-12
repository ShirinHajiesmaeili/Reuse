import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../data/authentication";
import ErrorPopup from "./ErrorPopup";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setError("");

    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      city: formData.get("city"),
      zipCode: formData.get("zipCode"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail(data.email)) {
      setError("Invalid email address");
      setIsLoading(false);
      return;
    }

    try {
      await signUp(data);
      navigate("/auth");
    } catch (error) {
      console.error(error);
      setError("Error creating account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center text-3xl font-extrabold text-tertiary">
        Create an Account
      </h2>

      <ErrorPopup message={error} onClose={() => setError("")} />

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-primary"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-primary"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-primary"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-primary"
            >
              Zip Code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-primary"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          {isLoading ? "Creating account..." : "Create an Account"}
        </button>

        <div className="text-center">
          <Link to="/auth">
            <button
              type="button"
              className="text-sm text-teal-600 hover:text-teal-500"
            >
              Already have an account? Sign In
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
