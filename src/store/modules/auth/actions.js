import {
  LOGIN_SUCCESS,
  SET_EMAIL,
} from './mutation-types'
import api from '@/api/api.js'

export default {
  async login({ dispatch }, { email, pass }) {
    await api.login(
      {
        email,
        password: pass
      },
      (tokenData) => {
        dispatch('saveToken', tokenData);
        console.log('prisijungeme sekmingai');
        dispatch('getUserData');
      },
      (errors) => {
        console.log(errors);
      }
    )
  },

  async register({ dispatch }, payload) {
    await api.register(
      {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        'password_confirmation': payload.passwordRepeat
      },
      (tokenData) => {
        dispatch('saveToken', tokenData);
        dispatch('getUserData');
      },
      (errors) => {
        console.log(errors);
      }
    )
  },

  saveToken(context, tokenData) {
    localStorage.authToken = JSON.stringify(tokenData);
  },

  async getUserData() {
    await api.getUser(
      (data) => {
        console.log(data);
      },
      (errors) => {
        console.log(errors);
      }
    )
  },

  async logout() {
    localStorage = {};


  },

  saveDataToLocalStorage({ commit }, email) {
    commit(LOGIN_SUCCESS);
    commit(SET_EMAIL, email);
  },

  loginSuccess({ commit }, { email, token }) {
    localStorage.setItem('token', token);
    commit(LOGIN_SUCCESS);
    commit(SET_EMAIL, email);
  }
}