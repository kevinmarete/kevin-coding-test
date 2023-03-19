const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
  },
  removeItemFromStandards({ state, commit }, standard) {
      commit('removeItemFromStandards', { standard })
  },
  clearItemsFromStandards({ state, commit }){
      commit('clearItemsFromStandards')
  }
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandards(state, { standard }){
        state.items = state.items.filter(item => item["code"] !== standard["code"])
    },
    clearItemsFromStandards(state){
        state.items = []
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
