import React, { useState } from "react";
import { Button, Input } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import { JsonToTable } from "react-json-to-table";
import { Navigate } from "react-router-dom";


import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
    getManagers, getStaff, getAdmin, getRealAdmin, CreateRealAdmin, CreateAdmin, CreateManagers, CreateStaff
} from "../redux/admin/admin.actions";
import UserDetailsTable from "../Components/tables/adminTable";

const Admin = ({ isAuthenticated, getManagers, getStaff, getAdmin, getRealAdmin, managers, admins, realAdmins, staff, CreateRealAdmin, CreateAdmin, CreateManagers, CreateStaff }) => {
    const input_data_structure = {
        delete_id: {
            key: "delete_id",
            text: "Delete Id",
            type: "text",
            value: "",
            is_valid: true,
            error: "",
        },

        approve_id: {
            key: "approve_id",
            text: "Approval Id",
            type: "text",
            value: "",
            is_valid: true,
            error: "",
        },
    };

    const auth = useSelector((state) => state.auth)

    const [inputs, set_inputs] = useState(input_data_structure);
    const [requestData, setData] = useState();
    const [title, set_title] = useState("");
    const [tab, setTab] = useState(0)
    const [data, set_data] = useState({});
    const [myJson, setMyJson] = useState([])

    const handle_change = (e, input) => {
        input.value = e.target.value;
        input.is_valid = e.target.value ? true : false;
        input.error = e.target.value ? "" : "Please input the password";

        let input_list = { ...inputs };
        input_list[input.key] = input;
        set_inputs(input_list);
    };

    const handle_submit = async () => {
        const event = window.event;
        event.preventDefault();

    };

    const show_tab = (tab) => {
        set_title(tab)
        if (tab === 'staff') {
            setTab(1)
            getStaff()
        } else if (tab === "admin") {
            setTab(2)
            getAdmin()
        } else if (tab === "realAdmins") {
            setTab(3)
            getRealAdmin();
        } else if (tab === "managers") {
            setTab(4)
            getManagers();
        } else if (tab === "removePro") {
            setTab(5);
        }

    };

    const handle_delete = () => {
        try {
            Axios.delete("127.0.0.1/api/" + title + inputs.delete_id.value)
                .then((response) => {
                    if (response.status == 200) {
                        const user_data = {
                            token: response.data.result.token,
                        };

                        toast.success("Deleted successfully!");
                    }
                })
                .catch((e) => {
                    toast.error(e);
                });
        } catch (e) {
            toast.error(e);
        }
    };

    const handle_approve = () => {
        try {
            Axios.delete("127.0.0.1/api/" + title + inputs.delete_id.value)
                .then((response) => {
                    if (response.status == 200) {
                        const user_data = {
                            token: response.data.result.token,
                        };

                        toast.success("Approved successfully!");
                    }
                })
                .catch((e) => {
                    toast.error(e);
                });
        } catch (e) {
            toast.error(e);
        }
    };

    // const myJson = {
    //     Sponsors: [
    //         { name: "john", email: "john@@xyz.com" },
    //         { name: "jane", email: "jane@@xyz.com" },
    //         { name: "jane", email: "jane@@xyz.com" },
    //         { name: "jane", email: "jane@@xyz.com" },
    //         { name: "jane", email: "jane@@xyz.com" },
    //         { name: "jane", email: "jane@@xyz.com" },
    //     ],
    // };
    if (!isAuthenticated) { return <Navigate replace to={`/login`} />; }

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-2 bg-blue-800 p-4 space-y-6">
                    <div
                        className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
                        onClick={() => show_tab("realAdmins")}
                    >
                        <img
                            className="w-[50px] h-auto mr-3"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <h1 className="text-white">Real Admin</h1>
                    </div>
                    <div
                        className="flex items-center hover:bg-blue-600 p-2 cursor-pointer rounded-md"
                        onClick={() => show_tab("admin")}
                    >
                        <img
                            className="w-[50px] h-auto mr-3"
                            src="/assets/Rectangle36.png"
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
                        ></img>
                        <h1 className="text-white">Remove Program</h1>
                    </div>
                </div>
                <div className="col-span-10 bg-blue-600 rounded-l-3xl p-10">
                    <h1 className="text-white text-4xl font-extrabold mb-8">
                        {title}
                    </h1>
                    {tab === 4 && managers && (
                        <>
                            <UserDetailsTable data={managers} />
                            <div className="flex justify-center items-center min-h-screen">
                                <div className="flex flex-col gap-5 items-center">
                                    <input
                                        className="w-1/4 p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter Manager ID"
                                        onChange={(e) => setData(e.target.value)}
                                    />
                                    <Button
                                        text="Approve Manager"
                                        handle_click={(e) => {
                                            e.preventDefault();
                                            CreateManagers({
                                                id: requestData,
                                            });
                                            setData("");
                                            toast.success("Manager approved successfully!");
                                        }}
                                        className="w-1/4"
                                    />
                                </div>
                            </div>


                        </>
                    )}
                    {tab === 2 && admins && (
                        <>
                            <UserDetailsTable data={admins} />
                            <div className="flex justify-center mt-10 min-h-screen">
                                <div className="flex flex-col w-1/4 gap-5 items-center">
                                    <input
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter Admin ID"
                                        onChange={(e) => setData(e.target.value)}
                                    />
                                    <Button
                                        text="Create Admin"
                                        handle_click={(e) => {
                                            e.preventDefault();
                                            CreateAdmin({
                                                superAdmin: auth.id,
                                                userAdmin: requestData,
                                            });
                                            setData("");
                                            toast.success("Admin created successfully!");
                                        }}
                                    />
                                </div>
                            </div>

                        </>
                    )}
                    {tab === 3 && realAdmins && (
                        <>
                            <UserDetailsTable data={realAdmins} />
                            <div className="flex justify-center items-center min-h-screen">
                                <div className="flex flex-col gap-5 items-center w-1/4">
                                    <input
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter Real Admin ID"
                                        onChange={(e) => setData(e.target.value)}
                                    />
                                    <Button
                                        text="Create Super Admin"
                                        handle_click={(e) => {
                                            e.preventDefault();
                                            CreateRealAdmin({
                                                superAdminGuid: auth.id,
                                                adminGuid: requestData,
                                            });
                                            setData("");
                                            toast.success("Super Admin created successfully!");
                                        }}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                        </>
                    )}
                    {tab === 5 && (
                        <div className="flex justify-center items-center min-h-screen">
                            <div className="flex flex-col gap-5 items-center w-1/4">
                                <input
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter Program to Remove"
                                    onChange={(e) => setData(e.target.value)}
                                />
                                <Button
                                    text="Remove Program"
                                    handle_click={() => {
                                        toast.success("Program removed successfully!");
                                    }}
                                    className="w-full"
                                />
                            </div>
                        </div>

                    )}
                    {tab === 1 && staff && (
                        <>
                            <UserDetailsTable data={staff} />
                            <div className="flex justify-center items-center min-h-screen">
                                <div className="flex flex-col gap-5 items-center w-1/4">
                                    <input
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="Enter Staff ID"
                                        onChange={(e) => setData(e.target.value)}
                                    />
                                    <Button
                                        text="Approve Staff"
                                        handle_click={(e) => {
                                            e.preventDefault();
                                            CreateStaff({
                                                id: requestData,
                                            });
                                            setData("");
                                            toast.success("Staff approved successfully!");
                                        }}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                        </>
                    )}


                    {/* <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Input input={inputs.approve_id}></Input>
                                <Button
                                    text="Approve"
                                    handle_click={handle_approve}
                                ></Button>
                            </div>
                        </div> */}
                </div>
            </div>
        </>
    );
};

// Admin.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    managers: state.admin.managers,
    admins: state.admin.admin,
    realAdmins: state.admin.realAdmin,
    staff: state.admin.staff

});


export default connect(mapStateToProps, {
    getManagers, getStaff, getAdmin, getRealAdmin, CreateRealAdmin, CreateAdmin, CreateManagers, CreateStaff
})(Admin);


