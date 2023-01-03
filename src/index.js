import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";

import store, { presistor } from "./redux/store";
import setAuthToken from "./redux/auth/auth.utils";
import { loadUser } from "./redux/auth/auth.actions";
import { PersistGate } from "redux-persist/integration/react";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>

        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
