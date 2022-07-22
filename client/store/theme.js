export default {
    namespaced: true,
    state() {
        return {
            dark: true,
            sidebarWidth: 220
        }
    },
    getters: {
        dark: (state) => state.dark,
        sidebarWidth: (state) => state.sidebarWidth,
    },
    mutations: {
        SET_DARK: (state, bool) => {
            state.dark = Boolean(bool)
        },
        SET_SIDEBAR_WIDTH: (state, value) => {
            state.sidebarWidth = value
        }
    },
    actions: {
        SET_DARK: ({commit}, bool) => {
            commit('SET_DARK', bool)
        },
        SET_SIDEBAR_WIDTH: ({commit}, value) => {
            commit('SET_SIDEBAR_WIDTH', value)
        }
    }
}
