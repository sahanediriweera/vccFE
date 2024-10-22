import { setAlert } from "../alert/alert.actions";
import axios from "axios";
import {
  GET_NEXT_PROGRAM,
  GET_PATIENT,
  UPDATE_CITIZEN,
  UPDATE_VACINATION,
  CREATE_VACCINE_TYPE,
  ADD_VACCINE,
} from "./staff.types";

import { BASE_URL } from "../../api/url";

export const getNexProgram =
  ({ staffID }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };
      const res = await axios.post(
        `${BASE_URL}/Staff/GetNextVaccineProgram`,
        staffID,
        config_headers
      );
      dispatch({
        type: GET_NEXT_PROGRAM,
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

export const GetPatient = (patientguid) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const id = patientguid.patientGuid;
    console.log(patientguid);
    const res = await axios.get(
      `${BASE_URL}/Staff/GetPatientDetails?citizenID=${patientguid}`,
      config_headers
    );
    dispatch({
      type: GET_PATIENT,
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

export const UpdateCitizen =
  ({
    id,
    vaccinationCount,
    vaccinationDate,
    reportData,
    otherDiseases,
    status,
    pending,
  }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({
        id,
        vaccinationCount,
        vaccinationDate,
        reportData,
        otherDiseases,
        status,
        pending,
      });

      const res = await axios.post(
        `${BASE_URL}/Staff/updatecitizendata`,
        body,
        config_headers
      );
      dispatch({
        type: UPDATE_CITIZEN,
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

// Action Creator
export const UpdatePatientVaccination =
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

      console.log("Updating vaccination for ID:", id);
      const res = await axios.post(
        `${BASE_URL}/Staff/UpdatePatientVaccination`,
        { id }, // Ensure you're sending the id as part of an object
        config_headers
      );
      dispatch({
        type: UPDATE_VACINATION,
        payload: res.data, // Use res.data to access the response data
      });
    } catch (err) {
      // console.error(err); // Log the error for debugging
      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: { msg: err.response?.statusText || 'Error', status: err.response?.status },
      // });
    }
  };
export const UpdateVaccinationBatch =
  ({ type, expirationDate, producedDate, count, batchId }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({
        type,
        expirationDate,
        producedDate,
        count,
        batchId,
      });
      console.log(body);
      const res = await axios.post(
        `${BASE_URL}/Staff/CreateVaccineBatch`,
        body,
        config_headers
      );
      dispatch({
        type: CREATE_VACCINE_TYPE,
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

export const CreateVaccineAdd =
  ({ id, vaccineProgramID }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ id, vaccineProgramID });

      const res = await axios.post(
        `${BASE_URL}/Staff/citizenvaccineadd`,
        body,
        config_headers
      );
      dispatch({
        type: ADD_VACCINE,
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
