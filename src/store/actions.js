export default {
    addThreeAsync({ commit }) {
        setTimeout(() => commit('add', 3), 3000);
    }
}