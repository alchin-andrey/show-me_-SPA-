import { createStore } from 'vuex';
import userStore from './user';
import moduleA from './moduleA';


const store = createStore({
  modules: {
    user: userStore,
    a: moduleA,
  },
});

export default store
