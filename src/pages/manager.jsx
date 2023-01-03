import React, { useState } from "react";
import { Button, Input,Select } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import { JsonToTable } from "react-json-to-table";

import { Navigate } from "react-router-dom";

import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
    getCitizenDetails, getstaff, getVaccineType,CreateProgram
} from "../redux/manager/manager.actions";

const Manager = ({ getVaccineType, getCitizenDetails, citizen, getstaff, staff, vaccinetype, isAuthenticated, CreateProgram }) => {

    const id = useSelector((state) => state.auth.id)


    const form = Object.freeze({
        citizenIDs: '',
        location: "",
        staffIds: "",
        vaccineIDs: "",
        date: "",
        managerId: id
    })

    const [addData, setAddData] = useState(form);
    const [title, set_title] = useState("My details");
    const [type, setType] = useState(0);

    const [data, set_data] = useState({});
    const [tab1, setTab1] = useState(false);

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
                { key: 2, id: "Phyzer", title: "Phyzer" },
           
            ],
        },
    }

    const handle_selection = async (e, input) => {
        const value = e.target.value;
        input.value = value;
        let input_list = { ...inputs };
        input_list[input.key] = input;
        set_inputs(input_list);
        getVaccineType(inputs.role.value);
    };

    const [inputs, set_inputs] = useState(input_data_);

    const handle_change = (e) => {
        setAddData({
            ...addData,
            [e.target.id]: e.target.value,
        })
        console.log(addData)
    }

    const show_tab = (tab) => {
        set_title(tab);
        if (tab === "patients") {
            getCitizenDetails();
            setType(1)
        } else if (tab === "staff") {
            getstaff();
            setType(2)
        } else if (tab === "vaccines") {
            setType(3);
        }  else if (tab === "createPro") {
            setType(4)
        }
    };

    const handle_create = () => {
        const event = window.event;
        event.preventDefault();
        CreateProgram(addData);
    };
    if(!isAuthenticated) {  return <Navigate replace to={`/login`} />;}

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-2">
    
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("patients")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Get Suitable Patients Candidates</h1>
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
                            <h1 className="text-white mt-8 ">
                                Get Staff
                            </h1>
                     
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("vaccines")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">
                                Get Vacciate Batches
                            </h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("createPro")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">
                                Create Program
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            {title}
                        </h1>
                        {type=== 1 && citizen && <JsonToTable id="o"  key={"123"} json={citizen} />}

                    </div>
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                          
                        </h1>
                        {type === 2 && staff && <JsonToTable key={1} json={staff} />}

                    </div>
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                          
                        </h1>
                        {type === 3 &&     <Select
                            input={inputs.role}
                            handle_selection={handle_selection}
                        />}
                    
                        {type === 3 && vaccinetype && <JsonToTable key={2} json={vaccinetype} />}
                        {type === 4 && 
                    <div className="mt-[50px] ml-20 w-[80%] grid grid-cols-2 gap-4">
                        <label> Patients IDs</label>
                        <textarea
                            input={addData.citizenIDs}
                            id="citizenIDs"
                            onChange={handle_change}
                        />
                        <label> staff IDs</label>
                        <textarea
                            input={addData.staffIds}
                            id="staffIds"
                            onChange={handle_change}
                           
                        />
                        <label> location</label>
                        <input
                            input={addData.location}
                            id="location"
                            onChange={handle_change}
                        />
                        <label> Date</label>
                        <input
                            input={addData.date}
                            id="date"
                            onChange={handle_change}
                        />
                          <label> Vaccine Id</label>
                        <input
                            input={addData.vaccineIDs}
                            id="vaccineIDs"
                            onChange={handle_change}
                        />
                           <Button text="Create Program"  
                           handle_click={handle_create} 
                           />
                    </div> }
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = (state) => ({
    dt: console.log(state),
    citizen: state.manager.citizenDetails,
    staff: state.manager.staff,
    vaccinetype: state.manager.vaccientType,
    isAuthenticated: state.auth.isAuthenticated


});


export default connect(mapStateToProps, {
    getCitizenDetails, getstaff, getVaccineType, CreateProgram
})(Manager);


