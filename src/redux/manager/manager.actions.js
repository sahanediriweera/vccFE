import { setAlert } from "../alert/alert.actions";

import { BASE_URL } from "../../api/url";
import {
  CREATE_PROGRAM,
  GET_STATISTICS,
  GET_VACCINE_TYPE,
  CREATE_POST,
  GET_CITIZEN_DETAILS,
  GET_staff_DETAILS
} from "./manager.types";

import axios from "axios";

export const getStats = () => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Manager/currentstatistics`,config_headers);

    dispatch({
      type: GET_STATISTICS,
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const CreateProgram = ({citizenIDs, location, staffIds, vaccineIds, date, managerId}) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({citizenIDs, location, staffIds, vaccineIds, date, managerId});

    const res = await axios.post(`${BASE_URL}/Manager/createprogram`,body,config_headers);

    dispatch({
      type: CREATE_PROGRAM,
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const getVaccineType = (batchType) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Manager/vaccinetypebatches?vaccinetype=${batchType}`,config_headers);

    dispatch({
      type: GET_VACCINE_TYPE,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};


export const CreateSend = ({toEmail, subject, body}) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const mailBody = JSON.stringify({toEmail, subject, body});

    const res = await axios.post(`${BASE_URL}/Manager/send`,mailBody,config_headers);

    dispatch({
      type: CREATE_POST,
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const getCitizenDetails = () => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Manager/citizendetails`,config_headers);

    dispatch({
      type: GET_CITIZEN_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const getstaff = () => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.get(`${BASE_URL}/Manager/getstaff`,config_headers);

    dispatch({
      type: GET_staff_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};



// // Add COMMENT
// export const addComment = (postId, formData) => async (dispatch) => {
//   try {
//     const res = await createSingleComment(postId, formData);

//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data.data,
//     });

//     dispatch(setAlert(res.data.message, "success"));

//     dispatch(getComments(postId));
//   } catch (err) {
//     dispatch(setAlert(err.response.data.message, "danger"));

//     dispatch({
//       type: COMMENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Delete Comment
// export const deleteComment = (CommentId) => async (dispatch) => {
//   try {
//     const res = await deleteSingleComment(CommentId);

//     dispatch({
//       type: DELETE_COMMENT,
//       payload: CommentId,
//     });

//     dispatch(setAlert(res.data.message, "success"));
//   } catch (err) {
//     dispatch(setAlert(err.response.data.message, "danger"));

//     dispatch({
//       type: COMMENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
