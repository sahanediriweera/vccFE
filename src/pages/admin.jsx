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
  removeProgram, // Import removeProgram action
} from "../redux/admin/admin.actions";
import AdminTable from "../Components/tables/adminTable";
import StaffTable from "../Components/tables/staffTable";
import ManagerTable from "../Components/tables/managerTable";

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
  CreateAdmin,
  CreateManagers,
  CreateStaff,
  removeProgram, // Add removeProgram to props
}) => {
  const auth = useSelector((state) => state.auth);
  const role = localStorage.getItem("role");

  const [tab, setTab] = useState(0);
  const [title, set_title] = useState("");
  const [programId, setProgramId] = useState(""); // State for Program ID

  useEffect(() => {
    console.log("User role:", role);
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

  const handleRemoveProgram = () => {
    if (programId) {
      removeProgram(programId)
        .then(() => {
          toast.success("Program removed successfully!");
        })
        .catch((err) => {
          console.error("Failed to remove program:", err);
          toast.error("Failed to remove program!");
        });
    } else {
      toast.error("Please enter a valid Program ID!");
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
          {/* <div
            className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
            onClick={() => show_tab("admin")}
          >
            <img
              className="w-[50px] h-auto mr-3"
              src="/assets/Rectangle36.png"
              alt="Admins"
            ></img>
            <h1 className="text-white">Admins</h1>
          </div> */}
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
          {/* <h1 className="text-white text-4xl font-extrabold mb-8">{title}</h1> */}

          {tab === 5 && (
            <>
              <div className="flex flex-col items-left">
                <h1 className="text-white text-2xl font-extrabold mb-8">
                  Remove Program
                </h1>
                <div className="flex flex-col items-left">
                  <input
                    type="text"
                    placeholder="Program ID"
                    className="w-96 p-2 rounded-md"
                    value={programId} // Bind input value to state
                    onChange={(e) => setProgramId(e.target.value)} // Update programId on change
                  />
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded mt-4 w-96"
                    onClick={handleRemoveProgram} // Call the handler on click
                  >
                    Remove Program
                  </button>
                </div>
              </div>
            </>
          )}

          {tab === 4 && managers && (
            <>
              <h1 className="text-white text-2xl font-extrabold mb-8">
                Managers
              </h1>
              <ManagerTable data={managers} CreateManagers={CreateManagers} />
            </>
          )}
          {tab === 2 && admins && (
            <>
              <h1 className="text-white text-2xl font-extrabold mb-8">
                Admins
              </h1>
              <AdminTable data={admins} CreateAdmin={CreateAdmin} />
            </>
          )}
          {tab === 1 && staff && (
            <>
              <h1 className="text-white text-2xl font-extrabold mb-8">Staff</h1>
              <StaffTable data={staff} CreateStaff={CreateStaff} />
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
  removeProgram: PropTypes.func.isRequired, // Add prop type for removeProgram
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
  removeProgram, // Add removeProgram to connect
})(SuperAdmin);
