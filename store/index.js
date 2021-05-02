export const state = () => ({
  error: null,
  user: null,
  token: null,
});
export const getters = {
  getError: (state) => state.error,
  getToken: (state) => state.token,
};
export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  setToken(state, payload) {
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
      commit('setToken', data.payload);
      await localStorage.setItem('token', data.payload);
    } catch (e) {
      commit('setError', e.response.data);
      throw e;
    }
  },
};
