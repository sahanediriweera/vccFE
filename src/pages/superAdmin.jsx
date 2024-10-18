import React, { useState, useEffect } from "react";
import { Button } from "../Components/common/ui";
import { toast, ToastContainer } from "react-toastify";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  getManagers,
  getStaff,
  getAdmin,
  getRealAdmin,
  CreateRealAdmin,
  CreateAdmin,
  CreateManagers,
  CreateStaff,
} from "../redux/admin/admin.actions";
import UserDetailsTable from "../Components/tables/adminTable"; // Updated import for the UserDetailsTable component

const SuperAdmin = ({
  isAuthenticated,
  getManagers,
  getStaff,
  getAdmin,
  getRealAdmin,
  managers,
  admins,
  realAdmins,
  staff,
  CreateAdmin, // CreateAdmin function for making API calls
  CreateManagers,
  CreateStaff,
}) => {
  const auth = useSelector((state) => state.auth); // Get authentication details
  const role = localStorage.getItem("role");

  const [tab, setTab] = useState(0);
  const [title, set_title] = useState("");

  useEffect(() => {
    console.log("User role:", role); // Log the role whenever the component mounts
  }, [role]);

  const show_tab = (tab) => {
    set_title(tab);
    if (tab === "staff") {
      setTab(1);
      getStaff();
    } else if (tab === "admin") {
      setTab(2);
      getAdmin();
    } else if (tab === "realAdmins") {
      setTab(3);
      getRealAdmin();
    } else if (tab === "managers") {
      setTab(4);
      getManagers();
    } else if (tab === "removePro") {
      setTab(5);
    }
  };

  if (!isAuthenticated) {
    return <Navigate replace to={`/login`} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
        <div className="col-span-2 bg-blue-800 p-4 space-y-6">
          <div
            className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
            onClick={() => show_tab("admin")}
          >
            <img
              className="w-[50px] h-auto mr-3"
              src="/assets/Rectangle36.png"
              alt="Admins"
            ></img>
            <h1 className="text-white">Admins</h1>
          </div>
          <div
            className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
            onClick={() => show_tab("staff")}
          >
            <img
              className="w-[50px] h-auto mr-3"
              src="/assets/Rectangle36.png"
              alt="Staff"
            ></img>
            <h1 className="text-white">Staff</h1>
          </div>
          <div
            className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
            onClick={() => show_tab("managers")}
          >
            <img
              className="w-[50px] h-auto mr-3"
              src="/assets/Rectangle36.png"
              alt="Managers"
            ></img>
            <h1 className="text-white">Managers</h1>
          </div>
          <div
            className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
            onClick={() => show_tab("removePro")}
          >
            <img
              className="w-[50px] h-auto mr-3"
              src="/assets/Rectangle36.png"
              alt="Remove Program"
            ></img>
            <h1 className="text-white">Remove Program</h1>
          </div>
        </div>
        <div className="col-span-10 bg-blue-600 rounded-l-3xl p-10">
          <h1 className="text-white text-4xl font-extrabold mb-8">{title}</h1>

          {/* Conditionally render the table based on the tab */}
          {tab === 4 && managers && (
            <>
              <UserDetailsTable data={managers} CreateAdmin={CreateAdmin} />{" "}
              {/* Pass CreateAdmin to the table */}
            </>
          )}
          {tab === 2 && admins && (
            <>
              <UserDetailsTable data={admins} CreateAdmin={CreateAdmin} />{" "}
              {/* Pass CreateAdmin to the table */}
            </>
          )}
          {tab === 1 && staff && (
            <>
              <UserDetailsTable data={staff} CreateAdmin={CreateAdmin} />{" "}
              {/* Pass CreateAdmin to the table */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

SuperAdmin.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getManagers: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
  getAdmin: PropTypes.func.isRequired,
  getRealAdmin: PropTypes.func.isRequired,
  CreateAdmin: PropTypes.func.isRequired,
  managers: PropTypes.array,
  admins: PropTypes.array,
  realAdmins: PropTypes.array,
  staff: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  managers: state.admin.managers,
  admins: state.admin.admin,
  realAdmins: state.admin.realAdmin,
  staff: state.admin.staff,
});

export default connect(mapStateToProps, {
  getManagers,
  getStaff,
  getAdmin,
  getRealAdmin,
  CreateRealAdmin,
  CreateAdmin,
  CreateManagers,
  CreateStaff,
})(SuperAdmin);
