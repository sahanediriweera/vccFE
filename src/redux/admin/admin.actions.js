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
    const res = await axios.get(`${BASE_URL}/Admin/manager`,config_headers);
    dispatch({
      type: GET_ANSWERS,
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

export const CreateManagers = ({managerId}) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.post(`${BASE_URL}/Admin/manager`,config_headers);
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
    const res = await axios.get(`${BASE_URL}/Admin/staff`,config_headers);
    dispatch({
      type: GET_STAFF,
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

export const CreateStaff = ({managerId}) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.post(`${BASE_URL}/Admin/staff`,config_headers);
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
    const res = await axios.get(`${BASE_URL}/Admin/admin`,config_headers);
    dispatch({
      type: GET_ADMIN,
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

export const CreateAdmin = (superAdmin, userAdmin) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({superAdmin, userAdmin});

    const res = await axios.post(`${BASE_URL}/Admin/saveadmin`,body, config_headers);
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


export const DeleteProgram = (superAdmin, userAdmin) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({superAdmin, userAdmin});

    const res = await axios.delete(`${BASE_URL}/Admin/saveadmin`,body, config_headers);
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

export const getRealAdmin = () => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Admin/realAdmin`,config_headers);
    dispatch({
      type: GET_REALADMIN,
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


export const CreateRealAdmin = ({superAdminGuid, adminGuid}) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({superAdminGuid, adminGuid});

    const res = await axios.post(`${BASE_URL}/Admin/realAdminguid`,body,config_headers);
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

// // Add Answer
// export const addAnswer = ({postId, formBody, userId, userName}) => async (dispatch) => {
//   try {
//     console.log(postId, formBody, userId)
//     const body = JSON.stringify({ postId, formBody, userId, userName });

//     const config_headers = {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     };
//     const res = await axios.post(createSingleAnswer, body, config_headers);

//     dispatch({
//       type: ADD_ANSWER,
//       payload: res.data,
//     });

//     dispatch(setAlert(res.data.msg, "success"));

//     dispatch(getAnswers(postId));
//   } catch (err) {
//     console.log(err)
//     dispatch(setAlert(err.response.data.msg, "danger"));

//     dispatch({
//       type: ANSWER_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Delete Answer
// export const deleteAnswer = (AnswerId) => async (dispatch) => {
//   try {
//     const res = await deleteSingleAnswer(AnswerId);

//     dispatch({
//       type: DELETE_ANSWER,
//       payload: AnswerId,
//     });

//     dispatch(setAlert(res.data.message, "success"));
//   } catch (err) {
//     dispatch(setAlert(err.response.data.message, "danger"));

//     dispatch({
//       type: ANSWER_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
