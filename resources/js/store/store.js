import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import data from "./data.json";

const storeData = {
    state: {
        userData: data,
        userSelected: []        
    },
    getters:{
        userTotal: state => state.userData.length,
        userDetailInfo: state => state.userSelected
    },
    mutations: {
        SELECT_USER(state, userId) {
            state.userSelected = state.userData.filter(userData => userData.id == userId)
        }
    },
    actions: {
        selectUser(context, userId) {
            context.commit('SELECT_USER', userId)
        }
    }
}

const store = new Vuex.Store(storeData)

export default store

   