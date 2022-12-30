import React, { useState } from "react";
import { Button } from "../Components/common/ui";

const Manager = () => {
    return (
        <div>
            <div className="grid grid-cols-10">
                <div className="col-span-9"></div>
                <div className="col-span-1">
                    <div className="flex">
                        <h1 className="mt-5">Manager</h1>
                        <img
                            className="w-16"
                            src="./assets/Rectangle19.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <Button text="Create Program"></Button>
                </div>
                <div className="col-span-3">
                    <Button text="Current Statistics"></Button>
                </div>
                <div className="col-span-3">
                    <Button text="Current Programs"></Button>
                </div>
                <div className="col-span-3">
                    <Button text="Future Statistics"></Button>
                </div>
            </div>
            <div className="grid grid-cols-12 w-[80%] m-auto gap-3">
                <div className="col-span-4">
                    {" "}
                    <img
                        className="w-full"
                        src="./assets/Rectangle24.png"
                        alt=""
                    />
                </div>
                <div className="col-span-8 bg-[#4B74C7]">
                    <div className="grid grid-cols-2 align-middle mt-[40px]">
                        <div className="w-full hover:opacity-[90%] cursor-pointer">
                            <img src="./assets/button1.png" alt="" />
                        </div>
                        <div className="w-full hover:opacity-[90%] cursor-pointer">
                            <img src="./assets/button2.png" alt="" />
                        </div>
                        <div className="w-full hover:opacity-[90%] cursor-pointer">
                            <img src="./assets/button3.png" alt="" />
                        </div>
                        <div className="w-full hover:opacity-[90%] cursor-pointer">
                            <img src="./assets/button4.png" alt="" />
                        </div>
                        <div className="w-full hover:opacity-[90%] cursor-pointer">
                            <img src="./assets/button5.png" alt="" />
                        </div>
                        <div className="w-full hover:opacity-[90%] cursor-pointer">
                            <img src="./assets/button6.png" alt="" />
                        </div>
                    </div>

                    <div className="w-[80%] mx-auto mt-3">
                        <Button text="Create Project"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manager;
