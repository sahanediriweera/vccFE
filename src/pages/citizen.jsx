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
    getDetails,getVacDate, CreateVacDate
  } from "../redux/citizen/citizen.actions";

const Citizen = ({getDetails,getVacDate, citizen, vaccineDate, CreateVacDate,isAuthenticated}) => {
    const [title, set_title] = useState("My details");
    const [data, set_data] = useState({});
    const [tab1, setTab1] = useState(false);

const id  = useSelector((state) => state.auth.id)


    const show_tab = (tab) => {
        set_title(tab);
        if(tab ==="My details") {
            getDetails();
            setTab1(true)
        } else if(tab === "Next Vaccination data"){
            setTab1(false)
            getVacDate();
        }
    };

    const handle_approve = () => {
        const event = window.event;
        event.preventDefault();
        CreateVacDate({id});
    };
    if(!isAuthenticated) {  return <Navigate replace to={`/login`} />;}

    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-12 bg-[#0234E2] min-h-[100vh]">
                <div className="col-span-2">
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("My details")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">My details</h1>
                        </div>
                    </div>
            
                    <div
                        className="grid grid-cols-3 hover:bg-[#0256E2] cursor-pointer"
                        onClick={() => show_tab("Next Vaccination data")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">
                               Next Vaccination data
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            {title}
                        </h1>
                        {citizen && tab1  &&    <JsonToTable json={citizen} /> }
                        {vaccineDate && !tab1 &&   <> <div className="grid grid-cols-2 gap-4">
                            <div> Vaccinated Date - {vaccineDate}</div>
                            <div></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Button
                                    text=" Change Vaccinate Date"
                                    handle_click={handle_approve}
                                ></Button>
                            </div>
                        </div>
                        </> 
                         }
                    
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    dt: console.log(state),
    citizen: state.citizen.citizen,
    vaccineDate: state.citizen.vaccineDates,
    isAuthenticated: state.auth.isAuthenticated
  });
  
  
  export default connect(mapStateToProps, {
    getDetails, getVacDate, CreateVacDate
  })(Citizen);
  

