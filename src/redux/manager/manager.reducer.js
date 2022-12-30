import {
  CREATE_PROGRAM,
  GET_STATISTICS,
  GET_VACCINE_TYPE,
  CREATE_POST,
  GET_CITIZEN_DETAILS,
} from "./manager.types";

const initialState = {
  currentStats: [],
  vaccientType: [],
  citizenDetails: {},
  loading: true,
  error: {},
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_STATISTICS:
      return {
        ...state,
        currentStats: action.payload,
        loading: false,
      };
    case GET_VACCINE_TYPE:
      return {
        ...state,
        vaccientType: action.payload,
        loading: false,
      };
    case GET_CITIZEN_DETAILS:
      return {
        ...state,
        citizenDetails: action.payload,
        loading: false,
      };

    // case CITIZEN_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
}
