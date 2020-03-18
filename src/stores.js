import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLogger()],
  state: {
    lists: [
      {title: 'Toyota', price: 2300, status: true},
      {title: 'Nissan', price: 1200, status: false},
      {title: 'Isuzu', price: 100, status: false},
    ],
    count: 1,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
  },
  actions: {},
  getters: {
    listTrue (state) {
      return state.lists.filter(item => item.status);
    },
    listTrueLength (state, getters) {
      return getters.listTrue.length;
    },
  },
});