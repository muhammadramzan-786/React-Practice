import React from 'react';
import { FaUser, FaEnvelope, FaCalendar } from 'react-icons/fa';

function Form() {

    const handleSubmit=(e)=>{
        e.preventDefault()
        return false
    }
  return (
    <div className="w-[600px] p-6 shadow-lg rounded-lg mx-auto mt-8 border-indigo-600 border-2 bg-white">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-center py-4 rounded-t-lg">
        <h1 className="text-4xl font-bold text-white">Registration Form</h1>
      </div>

      <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
        {/* First Name */}
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold text-gray-700"
          >
            First Name
          </label>
          <div className="relative mt-2">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Enter your first name"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold text-gray-700"
          >
            Last Name
          </label>
          <div className="relative mt-2">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              placeholder="Enter your last name"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700"
          >
            Age
          </label>
          <div className="relative mt-2">
            <FaCalendar className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-2">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="pl-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-base text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          Submit
        </button>
      </div>
      </form>
    </div>
  );
}

export default Form;
