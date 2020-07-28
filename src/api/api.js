import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export default {
  login: async (body, success, failure) => {
    try {
      const response = await api().post('auth/login', body);
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },

  register: async (body, success, failure) => {
    try {
      const response = await api().post('auth/register', body);
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },

  getUser: async (success, failure) => {
    try {
      const response = await api().get('auth/user');
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },

  getOrders: async (success, failure) => {
    try {
      const response = await api().get('order');
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },




  fetchItems: async (success, failure) => {
    try {
      const response = await api().get('products');
      // --------------------------- PAKITIMAI DAROME, NES BACKEND ATSIUNCIA KITOKIUS DUOMENIS NEI TIKETASI
      const data = response.data.items.map(el => ({
        ...el,
        img: el.images[0],
        vat: Number(el.vat),
      }
      ));
      // --------------------------- PAKITIMAI DAROME, NES BACKEND ATSIUNCIA KITOKIUS DUOMENIS NEI TIKETASI
      success(data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  }
}

function api() {
  if (localStorage.authToken) {
    // Automatiškai grąžinamas autorizuotas axios instance, 
    const { token_type, token } = JSON.parse(localStorage.authToken);
    return axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token_type + ' ' + token
      }
    })
  } else {
    // Automatiškai grąžinamas NEautorizuotas axios instance, 
    return axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

