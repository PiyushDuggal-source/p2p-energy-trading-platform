import React from "react";

const Options = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Final step, you are almost done!
        </h1>
      </div>
      <div className="flex gap-10">
        <button className="p-4 border-2 rounded-md border-gray-200 w-80 h-80 mt-20 focus:border-gray-800">
          Register yourself as Prosumer
        </button>
        <button className="p-4 border-2 rounded-md border-gray-200 w-80 h-80 mt-20 focus:border-gray-800">
          Register yourself as Customer
        </button>
      </div>
      <div className="mt-20">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Options;
