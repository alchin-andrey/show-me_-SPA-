// import getters from 'getters.js';


export default {
  state () {
    return {
      count :0,
    };
  },
  getters: { 
    doubleCount (state) {
        return state.count * 2;
    },
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    decrement (state) {
      state.count--;
    },
  },
  actions: {
    setZero (context) {
      context.state.count = 0;
    },
  },
  namespaced: true,
};
