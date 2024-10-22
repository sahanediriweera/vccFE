import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function AdminTable({ data, CreateAdmin }) {
  const auth = useSelector((state) => state.auth); // Get auth state from redux
  const [requestData, setRequestData] = useState(""); // To hold the selected user ID for permission

  const handleGrantPermission = (userId) => {
    setRequestData(userId); // Set the user ID for the API call

    try {
      CreateAdmin({
        superAdmin: auth.id, // Super admin ID from the auth state
        userAdmin: userId, // The ID of the user being granted permission
      });

      toast.success("Permission granted successfully!"); // Success notification
    } catch (error) {
      toast.error("Failed to grant permission!"); // Error notification
    }

    setRequestData(""); // Reset the request data after processing
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">CitizenID</th>
            <th className="py-3 px-6 text-left">Permission</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{row.name}</td>
              <td className="py-3 px-6 text-left">{row.phoneNumber}</td>
              <td className="py-3 px-6 text-left">{row.email}</td>
              <td className="py-3 px-6 text-left">{row.stringCitizenID}</td>
              <td className="py-3 px-6 text-left">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleGrantPermission(row.id); // Call the function on button click
                  }}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Grant Permission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminTable.propTypes = {
  data: PropTypes.array.isRequired,
  CreateAdmin: PropTypes.func.isRequired,
};
