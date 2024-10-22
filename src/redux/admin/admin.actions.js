import { setAlert } from "../alert/alert.actions";
import axios from "axios";
import {
  GET_MANAGERS,
  CREATE_MANAGERS,
  GET_STAFF,
  CREATE_STAFF,
  GET_ADMIN,
  CREATE_ADMIN,
  DELETE_PROGRAM,
  GET_REALADMIN,
  CREATE_REALADMIN,
} from "./admin.types";

// import {  deleteSingleAnswer } from "../../api/answersApi";
import { BASE_URL } from "../../api/url";

export const getManagers = (id) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Admin/managers`, config_headers);
    dispatch({
      type: GET_MANAGERS,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err)
    // dispatch({
    //   type: ANSWER_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const CreateManagers =
  ({ id }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ id });
      const res = await axios.post(
        `${BASE_URL}/Admin/managers`,
        body,
        config_headers
      );
      dispatch({
        type: CREATE_MANAGERS,
        payload: res,
      });
    } catch (err) {
      // console.log(err)
      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

export const getStaff = (id) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Admin/staff`, config_headers);
    dispatch({
      type: GET_STAFF,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err)
    // dispatch({
    //   type: ANSWER_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const CreateStaff =
  ({ id }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ id });

      const res = await axios.post(
        `${BASE_URL}/Admin/staff`,
        body,
        config_headers
      );
      dispatch({
        type: CREATE_STAFF,
        payload: res,
      });
    } catch (err) {
      // console.log(err)
      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

export const getAdmin = () => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Admin/admin`, config_headers);
    dispatch({
      type: GET_ADMIN,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err)
    // dispatch({
    //   type: ANSWER_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const CreateAdmin =
  ({ superAdmin, userAdmin }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ superAdmin, userAdmin });

      const res = await axios.post(
        `${BASE_URL}/Admin/saveadmin`,
        body,
        config_headers
      );
      dispatch({
        type: CREATE_ADMIN,
        payload: res,
      });
    } catch (err) {
      // console.log(err)
      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

export const DeleteProgram =
  ({ superAdmin, userAdmin }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ superAdmin, userAdmin });

      const res = await axios.delete(
        `${BASE_URL}/Admin/saveadmin`,
        body,
        config_headers
      );
      dispatch({
        type: DELETE_PROGRAM,
        payload: res,
      });
    } catch (err) {
      // console.log(err)
      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

export const removeProgram = (id) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.delete(
      `${BASE_URL}/Admin//api/Admin/programid`,
      id,
      config_headers
    );
    dispatch({
      type: DELETE_PROGRAM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: ANSWER_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const getRealAdmin = () => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Admin/realAdmins`, config_headers);
    dispatch({
      type: GET_REALADMIN,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: ANSWER_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const CreateRealAdmin =
  ({ superAdminGuid, adminGuid }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ superAdminGuid, adminGuid });

      const res = await axios.post(
        `${BASE_URL}/Admin/realAdminguid`,
        body,
        config_headers
      );
      dispatch({
        type: CREATE_REALADMIN,
        payload: res,
      });
    } catch (err) {
      // console.log(err)
      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

export const SET_ROLE = "SET_ROLE";

export const set_role = (role) => {
  return {
    type: SET_ROLE,
    payload: role,
  };
};
