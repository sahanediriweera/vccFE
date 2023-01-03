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
    getManagers, getStaff, getAdmin, getRealAdmin, CreateRealAdmin, CreateAdmin,CreateManagers,CreateStaff
} from "../redux/admin/admin.actions";

const Admin = ({ isAuthenticated, getManagers, getStaff, getAdmin, getRealAdmin, managers, admins, realAdmins, staff,CreateRealAdmin, CreateAdmin,CreateManagers,CreateStaff }) => {
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

    const auth = useSelector((state) => state.auth )

    const [inputs, set_inputs] = useState(input_data_structure);
    const [requestData, setData] = useState();
    const [title, set_title] =useState("");
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
        } else if(tab === "removePro"){
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
    if(!isAuthenticated) {  return <Navigate replace to={`/login`} />;}

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-2">
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("realAdmins")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Real Admin</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("admin")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Admins</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("staff")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Staff</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("managers")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Managers</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("Remove Program")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Remove Program </h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            {title}
                        </h1>
                        {tab === 4 && managers && <>  <JsonToTable json={managers} />


                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <input className="mt-[50px] ml-20 w-[80%]" onChange={(e) => setData(e.target.value)}></input>
                            <Button
                                text="Approve Manager"
                            handle_click={(e) => {
                                    e.preventDefault();
                                    CreateManagers({
                                        id: requestData,
                                    })
                                    setData("")

                            }}
                            ></Button>
                                </div>
                            </div>


                        </>}
                        {tab === 2 && admins && <> <JsonToTable json={admins} />     <div className="grid grid-cols-2 gap-4">
                            <div>
                            <input className="mt-[50px] ml-20 w-[80%]" onChange={(e) => setData(e.target.value)}></input>
                            <Button
                                text="Create Admin"
                            handle_click={(e) => {
                                    e.preventDefault();
                                    CreateAdmin({
                                        superAdmin: auth.id,
                                        userAdmin: requestData
                                    })
                                    setData("")

                            }}
                            ></Button>
                            </div>
                        </div> </>}
                        {tab === 3 && realAdmins && <> <JsonToTable json={realAdmins} />   <div>
                            <input className="mt-[50px] ml-20 w-[80%]" onChange={(e) => setData(e.target.value)}></input>
                            <Button
                                text="Create Super Admin"
                            handle_click={(e) => {
                                    e.preventDefault();
                                    CreateRealAdmin({
                                        superAdminGuid: auth.id,
                                        adminGuid: requestData
                                    })
                                    setData("");

                            }}
                            ></Button>
                        </div> </>}
                        {tab === 5 && <>  <div>
                            <input className="mt-[50px] ml-20 w-[80%]" onChange={(e) => setData(e.target.value)}></input>
                            <Button
                                text="Remove Program"
                            
                            ></Button>
                        </div> </>}
                        {tab === 1 && staff && <><JsonToTable json={staff} /> <div>
                        <input className="mt-[50px] ml-20 w-[80%]" onChange={(e) => setData(e.target.value)}></input>
                            <Button
                                text="Approve Staff"
                            handle_click={(e) => {
                                    e.preventDefault();
                                    CreateStaff({
                                        id: requestData,
                                        
                                    });
                                    setData("");

                            }}
                            ></Button>
                        </div></>}


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
    getManagers, getStaff, getAdmin, getRealAdmin,CreateRealAdmin,CreateAdmin, CreateManagers, CreateStaff
})(Admin);


