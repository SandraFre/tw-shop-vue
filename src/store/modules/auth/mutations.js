import {
  LOGIN_SUCCESS,
  SET_EMAIL,
} from './mutation-types'

export default {
  [LOGIN_SUCCESS](state){
    state.loggedIn = true;
  }, 

  [SET_EMAIL](state, email){
    state.email = email;
  }
}