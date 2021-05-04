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
      this.$axios.$post('http://localhost:3000/api/upload', payload);
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
  async aboutMe({ commit }, payload) {
    try {
      await this.$axios.$post('http://localhost:3000/api/aboutMe', payload);
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
  async exerience({ commit }, payload) {
    try {
      await this.$axios.$post('http://localhost:3000/api/experience', payload);
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
  async works({ commit }, payload) {
    try {
      const fd = new FormData();
      fd.append('preview', payload.preview);
      fd.append('images', payload.images);
      fd.append('title', payload.title);
      fd.append('description', payload.description);
      await this.$axios.$post('http://localhost:3000/api/works', fd);
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
  async concept({ commit }, payload) {
    try {
      const fd = new FormData();

      fd.append('image', payload.list[0], payload.list[0].name);
      await this.$axios
        .$post('http://localhost:3000/api/concept', payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => console.log(response));
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
  async email({ commit }, payload) {
    try {
      await this.$axios.$post('/api/email', payload);
    } catch (e) {
      commit('setError', e.response.data);
    }
  },
};
