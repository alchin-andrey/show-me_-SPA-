import { createStore } from 'vuex';
import userStore from './user';
import postsStore from './posts';
import moduleA from './moduleA';


const store = createStore({
  modules: {
    user: userStore,
    posts: postsStore,
    a: moduleA,
  },
});

export default store
