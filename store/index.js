export const state = () => ({
  error: null,
  user: null,
});
export const getters = {
  getError: (state) => state.error,
};
export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
};
export const actions = {
  async auth({ commit }, payload) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
    } catch (e) {
      commit('setError', e.message);
    }
  },
};
