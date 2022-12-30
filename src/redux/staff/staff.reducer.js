import {
  GET_NEXT_PROGRAM,
  GET_PATIENT,
  UPDATE_CITIZEN,
  UPDATE_VACINATION,
  CREATE_VACCINE_TYPE,
  ADD_VACCINE,

} from "./staff.types";

const initialState = {
  nextProgram: {},
  patient: {},
  loading: false,
  error: {},
};

export default function answers(state = initialState, action) {
  switch (action.type) {
    case GET_NEXT_PROGRAM:
      return {
        ...state,
        nextProgram: action.payload,
        loading: false,
      };
    case GET_PATIENT:
      return {
        ...state,
        patient: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
