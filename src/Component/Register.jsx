// pages/register.js
"use client";
// pages/register.js
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-0.75rem border border-default rounded transition border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 focus:border-focus focus:outline-none"
              placeholder="Name"
            />
            {errors.name && (
              <p className="mt-2 text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-0.75rem border border-default rounded transition border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 focus:border-focus focus:outline-none"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="mt-2 text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/i,
                  message: "Invalid phone number (10 digits)",
                },
              })}
              className="w-full p-0.75rem border border-default rounded transition border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 focus:border-focus focus:outline-none"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="mt-2 text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
