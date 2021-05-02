export const state = () => ({
  error: null,
  user: null,
  token: null,
  isAuthenticated: false,
});
export const getters = {
  getError: (state) => state.error,
  getToken: (state) => state.token,
  isAuthenticated: (state) => state.isAuthenticated,
};
export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  isAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },
  logout(state, payload) {
    state.token = payload;
  },
};
export const actions = {
  async auth({ commit }, payload) {
    try {
      const data = await this.$axios.$post(
        'http://localhost:3000/api/login',
        payload
      );
      await localStorage.setItem('token', data.payload);
      commit('setToken', data.payload);
      commit('isAuthenticated', true);
    } catch (e) {
      commit('setError', e.response.data);
      throw e;
    }
  },
  exit({ commit }) {
    try {
      commit('logout', false);
      commit('isAuthenticated', false);
      localStorage.removeItem('token');
    } catch (e) {
      console.log(e);
    }
  },
  async uploadDescription({ commit }, payload) {
    try {
      // this.$axios.$post('http://localhost:3000/api/login');
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
  exerience({ commit }, payload) {
    try {
      this.$axios.$post('http://localhost:3000/api/experience', payload);
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
};
