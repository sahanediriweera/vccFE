import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Manager, Admin, Staff } from "./pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/manager" element={<Manager />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/staff" element={<Staff />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;