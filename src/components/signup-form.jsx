import React from "react";

export default function SignUpForm({ values, setValues }) {
  return (
    <div className="w-[100%]">
      <form className="mt-6">
        <div className="flex justify-between">
          <div className="mb-2 px-[10px]">
            <label>
              <span className="text-white">First Name</span>
              <input
                type="text"
                name="name"
                className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2 px-[10px]">
            <label>
              <span className="text-white">Last Name</span>
              <input
                type="text"
                name="name"
                className=" w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="John cooks"
              />
            </label>
          </div>
        </div>
        <div className="my-3 px-[10px]">
          <label>
            <span className="text-white">Email address</span>
            <input
              name="email"
              type="email"
              className=" w-full block px-16 py-4 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john.cooks@example.com"
              required
            />
          </label>
        </div>

        <div className="mt-6 px-[10px]">
          <button
            type="submit"
            className="w-full block px-16 py-3 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-orange-500 text-white font-semibold"
          >
            Contact Us
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
}
