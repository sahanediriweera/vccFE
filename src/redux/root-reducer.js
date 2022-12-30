import {combineReducers} from 'redux';
import alert from './alert/alert.reducer';
import auth from './auth/auth.reducer';
import admin from './admin/admin.reducer';
import staff from './staff/staff.reducer';
import manager from './manager/manager.reducer';
import citizen from './citizen/citizen.reducer';

export default combineReducers({
  alert,
  auth,
  admin,
  staff,
  manager,
  citizen,
});
