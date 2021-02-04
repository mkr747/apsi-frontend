const state = () => ({
  user_id: null,
  is_staff: false
})

const mutations = {
  SET_USER(state, data) {
    state.user_id = data.id
    state.is_staff = data.is_staff
  }
}

const actions = {
  setUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('SET_USER', data)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions,
}
