import React, { useState } from "react";
import { Button, Input } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { JsonToTable } from "react-json-to-table";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";


import {
    GetPatient, UpdateCitizen, UpdatePatientVaccination, UpdateVaccinationBatch, CreateVaccineAdd
} from "../redux/staff/staff.actions";


const Staff = ({ isAuthenticated, GetPatient, paient, UpdateCitizen, UpdatePatientVaccination, UpdateVaccinationBatch, CreateVaccineAdd }) => {
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


    const form = Object.freeze({
        id: "",
        vaccinationCount: Number,
        vaccinationDate: '',
        reportData: "",
        otherDiseases: "",
        status: "",
        pending: Boolean,
    })

    const form2 = Object.freeze({
        producedDate: "",
        type: "",
        expirationDate: '',
        batchId: "",
        count: 0,

    });

    const form3 = Object.freeze({
        id: "",
        vaccineProgramID: ""

    })


    const [addData1, setAddData1] = useState(form2)
    const [addData2, setAddData2] = useState(form3)

    const [upId, setUpId] = useState();
    const [addData, setAddData] = useState(form)
    const [inputs, set_inputs] = useState(input_data_structure);
    const [title, set_title] = useState();
    const [block, setBlock] = useState(0)
    const [patientGuid, setGuid] = useState("")

    const handle_change = (e, input) => {
        input.value = e.target.value;
        input.is_valid = e.target.value ? true : false;
        input.error = e.target.value ? "" : "Please input the password";

        let input_list = { ...inputs };
        input_list[input.key] = input;
        set_inputs(input_list);
    };

    const onChange = async (e) => {
        e.preventDefault();
        setGuid(e.target.value);

    };
    const handle_submit = async () => {
        const event = window.event;
        event.preventDefault();
        console.log(patientGuid)
        GetPatient(patientGuid)

    };

    const handle_post = async () => {
        const event = window.event;
        event.preventDefault();
        console.log(patientGuid)
        UpdateCitizen(addData)

    };

    const handle_1_post = async () => {
        const event = window.event;
        event.preventDefault();
        UpdateVaccinationBatch(addData1)
    };

    const handle_post3 = async () => {
        const event = window.event;
        event.preventDefault();
        CreateVaccineAdd(addData2)
    };
    const handle_post4 = async () => {
        const event = window.event;
        event.preventDefault();
        UpdatePatientVaccination(addData2)
    };

    const form_change = (e) => {
        setAddData({
            ...addData,
            [e.target.id]: e.target.value,
        })
        console.log(addData)
    }

    const form_change1 = (e) => {
        setAddData1({
            ...addData1,
            [e.target.id]: e.target.value,
        })
        console.log(addData1)
    }

    const show_tab = (tab) => {
        set_title(tab);
        if (tab === "getDetails") {
            setBlock(1);
        } else if (tab === "updateCitizen") {
            setBlock(2)
        } else if (tab === "vaccineBatch") {
            setBlock(3)
        } else if (tab === "addVaccine") {
            setBlock(4);
        } else if (tab === "updateVac") {
            setBlock(5);
        }
    };

    if (!isAuthenticated) { return <Navigate replace to={`/login`} />; }


    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-2">
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("getDetails")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Get Patient Details</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("updateCitizen")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Citizen Details Update</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("vaccineBatch")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Create Vaccine Batch</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("addVaccine")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Add Vaccination to Citizen</h1>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("updateVac")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">Update Vaccination to Citizen</h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            {title}
                        </h1>
                        {block === 1 && <div className="grid ">
                            <input
                                placeholder="Patient Guid "
                                onChange={onChange}
                            />
                            <Button text="Get Patient" handle_click={handle_submit} />
                        </div>}

                        {block === 1 && paient && <JsonToTable json={paient} />}
                        {block === 2 && <div className="">
                            <div className="mt-[50px] ml-20 w-[80%] grid grid-cols-2 gap-4">
                                <label> Patients IDs</label>
                                <input
                                    input={addData.citizenIDs}
                                    id="id"
                                    type={"tel"}
                                    onChange={form_change}
                                />
                                <label> Vaccine Count</label>

                                <input
                                    input={addData.citizenIDs}
                                    id="vaccinationCount"
                                    type={"tel"}
                                    onChange={form_change}
                                />
                                <label> Vaccination Date</label>
                                <input
                                    input={addData.staffIds}
                                    id="vaccinationDate"
                                    onChange={form_change}

                                />
                                <label> Report Date</label>
                                <input
                                    input={addData.location}
                                    id="reportData"
                                    onChange={form_change}
                                />
                                <label> Other Diseases</label>
                                <input
                                    input={addData.date}
                                    id="otherDiseases"
                                    onChange={form_change}
                                />
                                <label> status</label>
                                <input
                                    input={addData.vaccineIDs}
                                    id="status"
                                    type={"boolean"}
                                    onChange={form_change}
                                />
                                <Button text="Update Patient Details" handle_click={handle_post} />
                            </div>
                        </div>}
                        {block === 3 &&
                                <div className="mt-[50px] ml-20 w-[80%] grid grid-cols-2 gap-4">
                                    <label> Type</label>
                                    <input
                                        input={addData1.type}
                                        id="type"
                                        type={"text"}
                                        onChange={form_change1}
                                    />
                                    <label> BatchId</label>

                                    <input
                                        input={addData1.batchId}
                                        id="batchId"
                                        type={"text"}
                                        onChange={form_change1}
                                    />
                                    <label> Expiration Date</label>
                                    <input
                                        input={addData1.expirationDate}
                                        id="expirationDate"
                                        onChange={form_change1}

                                    />
                                    <label> Produced Date</label>
                                    <input
                                        input={addData1.producedDate}
                                        id="producedDate"
                                        onChange={form_change1}
                                    />
                                    <label> Count</label>
                                    <input
                                        input={addData1.count}
                                        type={"tel"}
                                        id="count"
                                        onChange={form_change1}
                                    />
                                   <Button text="Update Patient Details" handle_click={handle_1_post} />
                                </div>}
                        {block === 4 && <>
                            <div className="mt-[50px] ml-20 w-[80%] grid grid-cols-2 gap-4">
                                <label> Id</label>
                                <input
                                    input={addData2.id}
                                    id="id"
                                    type={"text"}
                                    onChange={form_change1}
                                />
                                <label>vaccineProgramID</label>

                                <input
                                    input={addData2.vaccineProgramID}
                                    id="vaccineProgramID"
                                    type={"text"}
                                    onChange={form_change1}
                                />
                                <Button text="Update Patient Details" handle_click={handle_post3} />
                            </div>

                        </>}
                        {block === 5 && <>
                            <label>Id</label>
                            <input
                                onChange={(e) => setUpId(e.target.value)}
                            />
                            <Button text="Update Patient Details" handle_click={handle_post4} /></>}

                    </div>



                </div>

            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    dt: console.log(state),
    paient: state.staff.patient,
    isAuthenticated: state.auth.isAuthenticated

});


export default connect(mapStateToProps, {
    GetPatient, UpdateCitizen, UpdatePatientVaccination, UpdateVaccinationBatch, CreateVaccineAdd
})(Staff);


