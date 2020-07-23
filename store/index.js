export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit')  //старт приложения
},
  login({commit}) {
    commit('setToken', 'trueToken')
  },
  logout({commit}) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}
