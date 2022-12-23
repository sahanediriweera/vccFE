import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>
);
