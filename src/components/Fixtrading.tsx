import React from "react";

const Fixtrading = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Fix Trading
      </h1>
      <div className="p-4 border border-gray-200 w-80 mt-20">
        Under this type of trading you can sell/buy as your per unit of energy
        at fixed rate set by your Discom.
      </div>
      <div>
        <button
          className="flex mt-10 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Confirm Transaction
        </button>
      </div>
    </div>
  );
};

export default Fixtrading;
