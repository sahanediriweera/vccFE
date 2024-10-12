import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Login, Register, Manager, Admin, Staff, Citizen, Home } from "./pages";
import SuperAdmin from "./pages/superAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/citizen" element={<Citizen />} />
        <Route path="/superAdmin" element={<SuperAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
