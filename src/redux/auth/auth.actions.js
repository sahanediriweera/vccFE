import axios from "axios";
import setAuthToken from "./auth.utils";
import { setAlert } from "../alert/alert.actions";
import {
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  MANAGER_LOGIN_SUCCESS,
  ADMIN_LOGIN_SUCCESS,
  STAFF_LOGIN_SUCCESS,
  CITIZEN_LOGIN_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  DOC_LOGIN_SUCCESS,
  ADMIN_REG_SUCCESS,
  STAFF_REG_SUCCESS,
  MANAGER_REG_SUCCESS,
  CITIZEN_REG_SUCCESS,
} from "./auth.types";

import { SET_ALERT } from "../alert/alert.types";
import { BASE_URL } from "../../api/url";

//Register
export const registerAdmin =
  ({ name, phoneNumber, email, password, confirmPassword, citizenID }) =>
  async (dispatch) => {
    console.log(name, phoneNumber, email, password, confirmPassword, citizenID);
    try {
      const body = JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
        confirmPassword,
        citizenID,
      });

      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const res = await axios.post(
        `${BASE_URL}/SignUp/admin`,
        body,
        config_headers
      );
      dispatch({
        type: ADMIN_REG_SUCCESS,
        payload: res,
      });

      dispatch(setAlert(res.data.message, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const registerStaff =
  ({ name, phoneNumber, email, password, confirmPassword, citizenID }) =>
  async (dispatch) => {
    try {
      const body = JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
        confirmPassword,
        citizenID,
      });

      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const res = await axios.post(
        `${BASE_URL}/SignUp/staff`,
        body,
        config_headers
      );
      dispatch({
        type: STAFF_REG_SUCCESS,
        payload: res,
      });

      dispatch(setAlert(res.data.message, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
export const registerManager =
  ({ name, phoneNumber, email, password, confirmPassword, citizenID }) =>
  async (dispatch) => {
    try {
      const body = JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
        confirmPassword,
        citizenID,
      });

      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const res = await axios.post(
        `${BASE_URL}/SignUp/manager`,
        body,
        config_headers
      );
      dispatch({
        type: MANAGER_REG_SUCCESS,
        payload: res,
      });

      dispatch(setAlert(res.data.message, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const registerCitizen =
  ({ name, phoneNumber, email, password, confirmPassword, citizenID }) =>
  async (dispatch) => {
    try {
      const body = JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
        confirmPassword,
        citizenID,
      });

      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const res = await axios.post(
        `${BASE_URL}/SignUp/citizen`,
        body,
        config_headers
      );
      dispatch({
        type: CITIZEN_REG_SUCCESS,
        payload: res.data,
      });

      console.log(res.data);
      dispatch(setAlert(res.data.message, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const adminLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post(
        `${BASE_URL}/Login/admin`,
        body,
        config_headers
      );
      // localStorage.setItem("role", "admin")

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      // dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const managerLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post(
        `${BASE_URL}/Login/manager`,
        body,
        config_headers
      );
      localStorage.setItem("role", "manager");

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const staffLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post(
        `${BASE_URL}/Login/staff`,
        body,
        config_headers
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("role", "staff");

      // dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const citizenLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post(
        `${BASE_URL}/Login/citizen`,
        body,
        config_headers
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("role", "citizen");
      // dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
    // dispatch(setAlert(res.data.msg, "success"));
    // dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, "danger"));
  }
};
