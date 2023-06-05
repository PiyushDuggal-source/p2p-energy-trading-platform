import React from "react";

const Prefen2 = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                From
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                To
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Check box
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Naveen Garg
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                10:00 AM
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                10:00 PM
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                6.00 Rs
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>{" "}
              </td>
            </tr>

            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Gunjan Garg
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                1:00 PM
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                3:00 PM
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                6.00 Rs
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Confirm Transaction
        </button>
      </div>
    </div>
  );
};

export default Prefen2;
