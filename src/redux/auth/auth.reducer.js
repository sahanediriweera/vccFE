import localStorage from 'redux-persist/es/storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADMIN_LOGIN_SUCCESS,
  DOC_REGISTER_SUCCESS,
  DOC_LOGIN_SUCCESS,

  ADMIN_REG_SUCCESS,
  STAFF_REG_SUCCESS,
  MANAGER_REG_SUCCESS,
  CITIZEN_REG_SUCCESS


} from './auth.types';
 
const initialState = {
  isAuthenticated: null,
  id: "",
  loading: true,
  user: null,
};

export default function auth(state = initialState, action) {
  console.log(action)
  switch (action.type) {
   
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case ADMIN_REG_SUCCESS:
    case  STAFF_REG_SUCCESS:
    case  MANAGER_REG_SUCCESS:
    case  CITIZEN_REG_SUCCESS:
    case LOGIN_SUCCESS:
      // localStorage.setItem('token', action.payload.token);
      // localStorage.setItem("role", action.payload.role)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        id: action.payload,
      };
      
    //   case DOC_REGISTER_SUCCESS:
    //   case DOC_LOGIN_SUCCESS:
    //       localStorage.setItem('token', action.payload.token);
    //       localStorage.setItem("role", action.payload.role);
    //       localStorage.setItem("id", action.payload.id)
    //       return {
    //         ...state,
    //         ...action.payload,
    //         isAuthenticated: true,
    //         loading: false,
    //         role: action.payload.role
    //       };
    // case REGISTER_FAIL:
    // case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('main-root');
      return {
        state
      };
    default:
      return state;
  }
}
