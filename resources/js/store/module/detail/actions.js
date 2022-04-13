export default {
    selectUser(context, userId) {
        context.commit('SELECT_USER', userId)
    }
};