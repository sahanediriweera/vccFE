import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
