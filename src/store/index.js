import { createStore } from 'vuex'
import moduleA from './moduleA';
import moduleB from './moduleB';

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB,
  },
});

export default store
