import React, { useState } from "react";
import { addEducation } from "../../../../constants/api";

const AddEducationdetails = ({ onClose, onSave }) => {
  const [details, setDetails] = useState({
    university: "",
    degree: "",
    grade: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    // Add more fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(addEducation, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details), // Send the details object as JSON string in the request body
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        // Assuming the API returns a JSON response with the newly added education details
        const data = await response.json();
        console.log(data);
        // Pass the data to the onSave callback
        onSave(data);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
    onSave(details);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-auto rounded-lg bg-white p-6  sm:w-[800px]">
        <h2 className="mb-4 text-lg font-semibold">Add New Details</h2>
        <form>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="university"
            >
              University:
            </label>
            <input
              type="text"
              name="university"
              id="university"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="degree"
            >
              Degree:
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="grade"
            >
              Grade:
            </label>
            <input
              type="text"
              name="grade"
              id="grade"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="fieldOfStudy"
            >
              Field of Study:
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="startDate"
            >
              Start Date:
            </label>
            <input
              type="date" // changed to type date
              name="startDate"
              id="startDate"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="endDate"
            >
              End Date:
            </label>
            <input
              type="date" // changed to type date
              name="endDate"
              id="endDate"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>

          {/* Add more input fields for other details */}
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEducationdetails;
