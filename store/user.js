const state = {
  user_id: null,
  is_staff: false
}

const mutations = {
  setUser(state, data) {
    state.user_id = data.user_id
    is_staff = data.is_staff
  }
}

export default {
  state,
  mutations
}
