import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { signIn } from "../data/authentication";
import ErrorPopup from "./ErrorPopup";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setError("");

    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const { signedInUser } = await signIn(data);
      setUser(signedInUser);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Sign In
      </h2>

      <ErrorPopup message={error} onClose={() => setError("")} />

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
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
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
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
        </div>

        <div className="flex items-center justify-between">
          <Link to="/auth/forgotpassword">
            <button
              type="button"
              className="text-sm text-teal-600 hover:text-teal-500"
            >
              Forgot password?
            </button>
          </Link>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        <div className="text-center">
          <Link to="/auth/signup">
            <button
              type="button"
              className="text-sm text-teal-600 hover:text-teal-500"
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
