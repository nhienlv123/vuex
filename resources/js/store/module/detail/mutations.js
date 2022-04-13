export default {
    SELECT_USER(state, userId) {
        state.userSelected = state.userData.filter(userData => userData.id == userId)
    }
};