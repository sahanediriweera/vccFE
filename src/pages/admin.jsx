import React, { useState } from "react";
import { Button, Input } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import { JsonToTable } from "react-json-to-table";

const Admin = () => {
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

    const [inputs, set_inputs] = useState(input_data_structure);
    const [title, set_title] = useState("citizen");
    const [data, set_data] = useState({});
    const [employees, setEmployees] = useState([]);
    const myJson={Sponcer:[]};

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
        const data = {
            name: inputs.name.value,
            email: inputs.email.value,
            nic: inputs.nic.value,
            password: inputs.password.value,
            password_conf: inputs.password_conf.value,
        };

        try {
            Axios.get("https://localhost:7092/api/Admin/managers")
                .then((response) => {
                    if (response.status == 200) {
                        const user_data = {
                            token: response.data.result.token,
                        };

                        toast.success("Registered successfully!");
                    }
                })
                .catch((e) => {
                    toast.error(e);
                });
        } catch (e) {
            toast.error(e);
        }
    };

    const show_tab = (tab) => {
        set_title(tab);
        console.log(tab);
        try {
            Axios.get("https://localhost:7092/api/Admin/"+tab)
                .then((response) => {
                    setEmployees(response.data);
                    myJson.Sponcer=response.data
                    console.log(myJson)
                    if (response.status == 200) {
                        
                        console.log(response.status);
                    }
                })
                .catch((e) => {
                    toast.error(e);
                });
        } catch (e) {
            toast.error(e);
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

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-2">
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("citizen")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Citizens</h1>
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
                        onClick={() => show_tab("programms")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Programms</h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            {title}
                        </h1>
                        <JsonToTable json={myJson} />
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Input input={inputs.delete_id}></Input>
                                <Button
                                    text="Delete"
                                    handle_click={handle_delete}
                                ></Button>
                            </div>
                            <div>
                                <Input input={inputs.approve_id}></Input>
                                <Button
                                    text="Approve"
                                    handle_click={handle_approve}
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
