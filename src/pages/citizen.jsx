import React, { useState } from "react";
import { Button, Input } from "../Components/common/ui";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import { JsonToTable } from "react-json-to-table";

const Citizen = () => {
    const [title, set_title] = useState("My details");
    const [data, set_data] = useState({});

    const show_tab = (tab) => {
        set_title(tab);
        try {
            Axios.post("127.0.0.1/api/Signup/", data)
                .then((response) => {
                    if (response.status == 200) {
                        set_data(response.data.result.data);
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
                        onClick={() => show_tab("Vaccination data")}
                    >
                        <img
                            className="w-[70px] h-auto m-auto mt-[15px]"
                            src="/assets/Rectangle36.png"
                        ></img>
                        <div className="col-span-2">
                            <h1 className="text-white mt-8 ">
                                Vaccination data
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 bg-[#0131B7] rounded-l-[50px]">
                    <div className="mt-[50px] ml-20 w-[80%]">
                        <h1 className="text-white font-extrabold text-3xl">
                            {title}
                        </h1>
                        <JsonToTable />
                        <div className="grid grid-cols-2 gap-4">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Citizen;
