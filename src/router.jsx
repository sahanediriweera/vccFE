import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./Components/Home/HomePage";
import { Login, Register, Manager, Admin, Staff} from "./pages";
import Citizen from './pages/citizen'
import Header from './Components/Header/Header'
=======
import { Login, Register, Manager, Admin, Staff, Citizen } from "./pages";

>>>>>>> 4eb0105e22aa093ac7a975efb4849983ffbe5f62
const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/manager" element={<Manager />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/citizen" element={<Citizen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
