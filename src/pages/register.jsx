import React, { useState } from "react";
import { Button, Input } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";

const Register = () => {
    const input_data_structure = {
        name: {
            key: "name",
            text: "Name",
            type: "text",
            value: "",
            is_valid: true,
            error: "",
        },
        email: {
            key: "email",
            text: "Email",
            type: "email",
            value: "",
            is_valid: true,
            error: "",
        },
        nic: {
            key: "nic",
            text: "nic",
            type: "text",
            value: "",
            is_valid: true,
            error: "",
        },
        password: {
            key: "password",
            text: "Password",
            type: "password",
            value: "",
            mask: true,
            is_valid: true,
            error: "",
        },
        password_conf: {
            key: "password_conf",
            text: "Password confirmation",
            type: "password",
            value: "",
            mask: true,
            is_valid: true,
            error: "",
        },
    };

    const [inputs, set_inputs] = useState(input_data_structure);
    const [role, set_role] = useState("Manager");

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
            Axios.post("127.0.0.1/api/Signup/" + role, data)
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

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-6">
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => set_role("citizen")}
                    >
                        <img
                            className="w-[100px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle18.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Citizen</h1>
                            <h1 className="text-white mt-3">
                                Select your Role as Citizen
                            </h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => set_role("staff")}
                    >
                        <img
                            className="w-[100px] h-auto m-auto mt-[15px] "
                            src="/assets/Rectangle14.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Staff</h1>
                            <h1 className="text-white mt-3">
                                Select your Role as Staff
                            </h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => set_role("manager")}
                    >
                        <img
                            className="w-[100px] h-auto m-auto mt-[15px] "
                            src="/assets/Rectangle19.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Manager</h1>
                            <h1 className="text-white mt-3">
                                Select your Role as Manager
                            </h1>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => set_role("administrator")}
                    >
                        <img
                            className="w-[100px] h-auto m-auto mt-[15px] "
                            src="/assets/Rectangle20.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Administrator</h1>
                            <h1 className="text-white mt-3">
                                Select your Role as Administrator
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            Register
                        </h1>
                        <p className="text-white">Signup as {role}</p>

                        <Input
                            input={inputs.name}
                            handle_change={handle_change}
                        />
                        <Input
                            input={inputs.email}
                            handle_change={handle_change}
                        />
                        <Input
                            input={inputs.nic}
                            handle_change={handle_change}
                        />
                        <Input
                            input={inputs.password}
                            handle_change={handle_change}
                        />
                        <Input
                            input={inputs.password_conf}
                            handle_change={handle_change}
                        />

                        <Button handle_click={handle_submit} text="Register" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
