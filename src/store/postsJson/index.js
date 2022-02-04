export default {
    namespaced: true,


    state: () => ({
        postsJs: [],
        initLoad: false,
    }),


    getters: {
        count (state) {
            return state.postsJs.length;
        },
        getInitLoad (state) {
            return state.initLoad;
        },
        all (state) {
            return state.postsJs;
        },
        everyTen (state) {
            return state.postsJs.filter(post => post.id % 10 === 1);
        },
        newsPosts() {
            return state.postsJs.filter(post => post.type === 'news');
        },
    },




    mutations: {
        addPost(state, data) {
            state.postsJs.push(data);
        }
    },





    actions: {
        firstLoadPosts(context) {
            if (!context.state.initLoad) {
                context.state.initLoad = true;
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => context.state.postsJs = context.state.postsJs.concat(json));
                // .then((json) => context.state.posts = json);
            }
        },
        loadPosts(context) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => context.state.postsJs = context.state.postsJs.concat(json));
                // .then((json) => context.state.posts = json);
        },
        createPost(context, data) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => context.commit('addPost', json));
        },
    },
};


