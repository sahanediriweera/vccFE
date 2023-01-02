import { setAlert } from "../alert/alert.actions";
import {
  GET_CITIZEN_DTLS,
  POST_VACCINEDATE,
  GET_VACCINEDATE,
  CITIZEN_ERROR
} from "./citizen.types";
import axios from "axios";
import { BASE_URL } from "../../api/url";

export const getDetails = (id) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };

    const res = await axios.post(`${BASE_URL}/Citizen/GetDetails/`, {id: "ACCB190F-F761-406F-0C82-08DAE4B2F906"},  config_headers);

    dispatch({
      type: GET_CITIZEN_DTLS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const CreateVacDate = ({id}) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ id });

    const res = await axios.post(`${BASE_URL}/Citizen/ChangeVaccineDate`,body,config_headers);

    dispatch({
      type: POST_VACCINEDATE,
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: COMMENT_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

export const getVacDate = (no) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const res = await axios.post(`${BASE_URL}/Citizen/GetVaccineDate`,{
      id: "ACCB190F-F761-406F-0C82-08DAE4B2F906"
    },config_headers);

    dispatch({
      type: GET_VACCINEDATE,
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
