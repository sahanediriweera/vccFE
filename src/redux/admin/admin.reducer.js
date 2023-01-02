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
  ADMIN_ERROR
} from "./admin.types";

const initialState = {
  managers: [],
  staff: [],
  admin: [],
  realAdmin: [],
  loading: false,
  error: {},
};

export default function answers(state = initialState, action) {
  switch (action.type) {
    case GET_MANAGERS:
      return {
        ...state,
        managers: action.payload,
        loading: false,
      };
    case GET_STAFF:
      return {
        ...state,
        staff: action.payload,
        loading: false,
      };
    case GET_ADMIN:
      return {
        ...state,
        admin: action.payload,
        loading: false,
      };
    case GET_REALADMIN:
      return {
        ...state,
        realAdmin: action.payload,
        loading: false,
      };
      case ADMIN_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
    default:
      return state;
  }
}
