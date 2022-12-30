import {
  GET_CITIZEN_DTLS,
  POST_VACCINEDATE,
  GET_VACCINEDATE,
  CITIZEN_ERROR
} from './citizen.types';

const initialState = {
  citizen: [],
  vaccineDates:[],
  loading: true,
  error: {},
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_CITIZEN_DTLS:
      return {
        ...state,
        citizen: action.payload,
        loading: false,
      };
      case GET_VACCINEDATE:
      return {
        ...state,
        vaccineDates: action.payload,
        loading: false,
      };
    //   case CRT_CONVER:
    //   return {
    //     ...state,
    //     convers: action.payload,
    //     loading: false,
    //   };
    // case ADD_COMMENT:
    //   return {
    //     ...state,
    //     comments: [action.payload, ...state.comments],
    //     loading: false,
    //   };
    // case DELETE_COMMENT:
      // return {
      //   ...state,
      //   comments: state.comments.filter(
      //     (answer) => answer.id !== action.payload
      //   ),
      //   loading: false,
      // };
    case CITIZEN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
