import React, { useState } from "react";
import { Button, Input, Select } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import { Navigate } from "react-router-dom";

import { user_logged_in } from "../redux/actions";



import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
    adminLogin,citizenLogin,staffLogin,managerLogin
  } from "../redux/auth/auth.actions";



const Login = ({adminLogin,citizenLogin,staffLogin,managerLogin, isAuthenticated}) => {
    const role = localStorage.getItem("role")


    const input_data_structure = {
        role: {
            key: "role",
            text: "Role",
            value: "0",
            is_valid: true,
            error: "",
            list_items: [
                { key: 0, id: "", title: "" },
                { key: 1, id: "citizen", title: "citizen" },
                { key: 2, id: "staff", title: "staff" },
                { key: 3, id: "manager", title: "manager" },
                { key: 4, id: "administrator", title: "administrator" },
            ],
        },
        email: {
            key: "email",
            text: "Email",
            type: "email",
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
    };

    const [inputs, set_inputs] = useState(input_data_structure);

    const handle_change = (e, input) => {
        input.value = e.target.value ;
        input.is_valid = e.target.value ? true : false;
        input.error = e.target.value ? "" : "Please input the password";
        let input_list = { ...inputs };
        input_list[input.key] = input;
        set_inputs(input_list);
    };

    const handle_selection = async (e, input) => {
        const value = e.target.value;
        input.value = value;
        let input_list = { ...inputs };
        input_list[input.key] = input;
        set_inputs(input_list);
    };

    const handle_submit = async () => {
        const event = window.event;
        event.preventDefault();
        const data = {
            email: inputs.email.value,
            password: inputs.password.value,
        };
        if (inputs.role.value === "manager") {
            managerLogin(data);
          } else if (inputs.role.value === "citizen") {
            citizenLogin(data);
          } else if (inputs.role.value === "administrator") {
            adminLogin(data);
          } else if (inputs.role.value === "staff") {
            staffLogin(data);
          }



     
      

        // try {
        //     Axios.post(
        //         "https://localhost:7092/api/Login/" + inputs.role.value,
        //         data
        //     )
        //         .then((response) => {
        //             if (response.status == 200) {
        //                 const user_data = {
        //                     token: response.data.result.token,
        //                 };

        //                 toast.success("Logged in successfully!");

        //                 setTimeout(() => {
        //                     dispatch(user_logged_in(user_data));
        //                     return <Navigate replace to="/dfg" />;
        //                 }, 1000);
        //             }
        //         })
        //         .catch((e) => {
        //             toast.error(e);
        //         });
        // } catch (e) {
        //     toast.error(e);
        // }
    };
    if(role === "citizen"){
        return <Navigate replace to={`/citizen`} />
      } else if (role === "staff"){
        return <Navigate replace to={`/staff`} />
        
      } else if (role === "manager"){
        return <Navigate replace to={`/manager`} />

      } else if(role === "admin") {
        return <Navigate replace to={`/admin`} />

      }

    // if(isAuthenticated) {  return <Navigate replace to={`/home`} />;}
    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-6">
                    <img
                        className="w-[400px] h-auto m-auto mt-[200px]"
                        src="/assets/login-aside.png"
                    ></img>
                </div>
                <div className="col-span-6 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[200px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            Login
                        </h1>
                        <p className="text-white">
                            Select your role and Enter Email, Password
                        </p>
                        <Select
                            input={inputs.role}
                            handle_selection={handle_selection}
                        />
                        <Input
                            input={inputs.email}
                            handle_change={handle_change}
                        />
                        <Input
                            input={inputs.password}
                            handle_change={handle_change}
                        />
                        <Button text="Login" handle_click={handle_submit} />
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = (state) => ({
    dt: console.log(state),
    isAuthenticated: state.auth.isAuthenticated
  });
  
  
  export default connect(mapStateToProps, {
    adminLogin,citizenLogin,staffLogin,managerLogin
  })(Login);

