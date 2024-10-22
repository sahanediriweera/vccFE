import React, { useState, useEffect } from "react";
import { Button, Input, Select } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import { JsonToTable } from "react-json-to-table";
import { Navigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS

import {
  getCitizenDetails,
  getstaff,
  getVaccineType,
  CreateProgram,
} from "../redux/manager/manager.actions";

const vaccineDescriptions = {
  Sinopharm: `
      Sinopharm is an inactivated virus vaccine developed by the China National Pharmaceutical Group (CNBG). It is designed using traditional vaccine technology, similar to vaccines for polio and hepatitis A. Sinopharm has shown an efficacy of around 79% in clinical trials, providing reliable protection against COVID-19, especially in regions where access to ultra-cold storage is limited. It can be stored at normal refrigerator temperatures (2-8°C), making it suitable for distribution in many parts of the world. Common side effects include mild pain at the injection site, fever, and fatigue, while severe reactions are rare. This vaccine is widely used, particularly in Asia, Africa, and the Middle East.
    `,
  Moderna: `
      Moderna is an mRNA-based vaccine developed by Moderna, Inc. in collaboration with the U.S. National Institutes of Health. It boasts an efficacy rate of over 94% in preventing symptomatic COVID-19 cases. While it requires ultra-cold storage at -20°C, recent studies indicate it can remain stable in refrigerator temperatures for shorter periods. Common side effects include soreness at the injection site, headache, fatigue, and fever, with very rare cases of myocarditis reported. Moderna is usually administered in two doses, 28 days apart, and is highly effective in preventing severe illness and hospitalization, especially in high-risk populations.
    `,
  Pfizer: `
      Pfizer-BioNTech (Comirnaty) was the first mRNA-based COVID-19 vaccine approved for use, developed jointly by Pfizer and BioNTech. It has demonstrated an impressive efficacy of around 95% in clinical trials, making it one of the most effective vaccines available. Though it requires storage at ultra-cold temperatures (-70°C), more recent guidelines allow for storage at standard refrigerator temperatures for up to 30 days. Common side effects include injection site pain, tiredness, headache, and fever, while rare cases of myocarditis and pericarditis, mainly in young males, have been reported. Typically administered in two doses 21 days apart, Pfizer is highly recommended for its strong protection against severe illness and hospitalization, even in the presence of variants.
    `,
};

const locations = [
  { key: 1, id: "Kalegana", title: "Kalegana" },
  { key: 2, id: "Hapugala", title: "Hapugala" },
  { key: 3, id: "Karapitiya", title: "Karapitiya" },
  { key: 4, id: "Poddala", title: "Poddala" },
];

const Manager = ({
  getVaccineType,
  getCitizenDetails,
  citizen,
  getstaff,
  staff,
  vaccinetype,
  isAuthenticated,
  CreateProgram,
}) => {
  const id = useSelector((state) => state.auth.id);

  const form = Object.freeze({
    citizenIDs: "",
    location: "",
    staffIds: "",
    vaccineIDs: "",
    date: new Date(), // Initialize date with current date
    managerId: id,
  });

  const [addData, setAddData] = useState(form);
  const [title, set_title] = useState("My details");
  const [type, setType] = useState(0);
  const [data, set_data] = useState({});
  const [tab1, setTab1] = useState(false);
  const [vaccineDescription, setVaccineDescription] = useState("");

  const input_data_ = {
    role: {
      key: "role",
      text: "Role",
      value: "0",
      is_valid: true,
      error: "",
      list_items: [
        { key: 0, id: "Sinopharm", title: "Sinopharm" },
        { key: 1, id: "Moderna", title: "Moderna" },
        { key: 2, id: "Pfizer", title: "Pfizer" },
      ],
    },
  };

  const handle_selection = (e, input) => {
    const value = e.target.value;
    input.value = value;
    let input_list = { ...inputs };
    input_list[input.key] = input;

    if (input.key === "role") {
      getVaccineType(inputs.role.value);
      const selectedVaccine = input.list_items.find(
        (item) => item.id === value
      ).title;
      setVaccineDescription(vaccineDescriptions[selectedVaccine]);
    }

    set_inputs(input_list);
  };

  const [inputs, set_inputs] = useState(input_data_);

  const handle_change = (e) => {
    setAddData({
      ...addData,
      [e.target.id]: e.target.value,
    });
  };

  const handle_date_change = (date) => {
    setAddData({
      ...addData,
      date: date, // Update date in state
    });
  };

  const show_tab = (tab) => {
    set_title(tab);
    if (tab === "Patients") {
      getCitizenDetails();
      setType(1);
    } else if (tab === "Staff") {
      getstaff();
      setType(2);
    } else if (tab === "Vaccines") {
      setType(3);
    } else if (tab === "Create-Program") {
      setType(4);
    }
  };

  const handle_create = async () => {
    try {
      const event = window.event;
      event.preventDefault();
      console.log(addData);

      // Assuming CreateProgram returns a promise
      await CreateProgram(addData);

      // Show success toast notification
      toast.success("Create Program successfully!");
    } catch (error) {
      console.error("Failed to create Program:", error);

      // Show error toast notification
      toast.error("Failed to create Program!");
    }
  };

  if (!isAuthenticated) {
    return <Navigate replace to={`/login`} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
        <div className="col-span-2">
          <div
            className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
            onClick={() => show_tab("Patients")}
          >
            <img
              className="w-[70px] h-auto m-auto mt-[15px]"
              src="/assets/Rectangle36.png"
              alt="Get Suitable Patients Candidates"
            />
            <div className="col-span-2">
              <h1 className="text-white mt-8 ">
                Get Suitable Patients Candidates
              </h1>
            </div>
          </div>

          <div
            className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
            onClick={() => show_tab("Staff")}
          >
            <img
              className="w-[70px] h-auto m-auto mt-[15px]"
              src="/assets/Rectangle36.png"
              alt="Get Staff"
            />
            <div className="col-span-2">
              <h1 className="text-white mt-8 ">Get Staff</h1>
            </div>
          </div>

          <div
            className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
            onClick={() => show_tab("Vaccines")}
          >
            <img
              className="w-[70px] h-auto m-auto mt-[15px]"
              src="/assets/Rectangle36.png"
              alt="Get Vaccine Batches"
            />
            <div className="col-span-2">
              <h1 className="text-white mt-8 ">Get Vaccine Batches</h1>
            </div>
          </div>

          <div
            className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
            onClick={() => show_tab("Create-Program")}
          >
            <img
              className="w-[70px] h-auto m-auto mt-[15px]"
              src="/assets/Rectangle36.png"
              alt="Create Program"
            />
            <div className="col-span-2">
              <h1 className="text-white mt-8 ">Create Program</h1>
            </div>
          </div>
        </div>

        <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
          <div className="mt-[50px] ml-20 w-[80%]">
            <h1 className="text-white font-extrabold text-3xl">{title}</h1>
            {type === 1 &&
              citizen && ( // Add a condition `showTable`
                <JsonToTable
                  id="o"
                  key={"123"}
                  json={citizen.map(
                    ({
                      id,
                      dateofBirth,
                      hospitalId,
                      phoneNumber,
                      birthDate,
                      pending,
                      ...rest
                    }) => rest
                  )}
                />
              )}
          </div>
          <div className="mt-[50px] ml-20 w-[80%]">
            <h1 className="text-white font-extrabold text-3xl"></h1>
            {type === 2 && staff && (
              <JsonToTable
                key={1}
                json={staff.map(
                  ({ id, dateofBirth, hospitalId, phoneNumber, ...rest }) =>
                    rest
                )}
              />
            )}
          </div>
          <div className="mt-[50px] ml-20 w-[80%]">
            <h1 className="text-white font-extrabold text-3xl"></h1>
            {type === 3 && (
              <>
                <Select
                  input={inputs.role}
                  handle_selection={handle_selection}
                />
                <p className="text-white mt-4">{vaccineDescription}</p>
              </>
            )}
            {type === 3 && vaccinetype && (
              <JsonToTable
                key={2}
                json={vaccinetype.map(
                  ({ id, vaccinePrograms, ...rest }) => rest
                )}
              />
            )}
            {type === 4 && (
              <div className="mt-[50px] ml-20 w-[80%] grid grid-cols-2 gap-4">
                <label>Patients</label>
                <Select
                  input={{
                    key: "citizenIDs",
                    text: "Select Patient",
                    value: addData.citizenIDs,
                    list_items: citizen.map((patient) => ({
                      key: patient.id,
                      id: patient.id,
                      title: patient.name, // Display patient names
                    })),
                  }}
                  handle_selection={(e, input) => {
                    handle_change(e);
                    setAddData({
                      ...addData,
                      citizenIDs: e.target.value,
                    });
                  }}
                />

                <label>Location</label>
                <Select
                  input={{
                    key: "location",
                    text: "Select Location",
                    value: addData.location,
                    list_items: locations,
                  }}
                  handle_selection={(e, input) => {
                    handle_change(e);
                    setAddData({
                      ...addData,
                      location: e.target.value, // Update the selected location
                    });
                  }}
                />

                <label>Staff</label>
                <Select
                  input={{
                    key: "staffIds",
                    text: "Select Staff",
                    value: addData.staffIds,
                    list_items: staff.map((staffMember) => ({
                      key: staffMember.id,
                      id: staffMember.id,
                      title: staffMember.name,
                    })),
                  }}
                  handle_selection={(e, input) => {
                    handle_change(e);
                    setAddData({
                      ...addData,
                      staffIds: e.target.value,
                    });
                  }}
                />

                <label>Date</label>
                <DatePicker
                  selected={addData.date}
                  onChange={handle_date_change}
                  className="p-2 rounded"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />

                <label htmlFor="vaccineIDs">COVID Vaccine</label>
                <select
                  id="vaccineIDs"
                  value={addData.vaccineIDs}
                  onChange={handle_change}
                  className="p-2 rounded"
                >
                  <option value="Pfizer">Pfizer</option>
                  <option value="Moderna">Moderna</option>
                  <option value="Sinopharm">Sinopharm</option>
                </select>

                <Button text="Create Program" handle_click={handle_create} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  citizen: state.manager.citizenDetails,
  staff: state.manager.staff,
  vaccinetype: state.manager.vaccientType,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  getCitizenDetails,
  getstaff,
  getVaccineType,
  CreateProgram,
})(Manager);
