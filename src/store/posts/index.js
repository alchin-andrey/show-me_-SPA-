export default {
    namespaced: true,


    state: () => ({
        posts: [],
        initLoad: false,
    }),


    getters: {
        count (state) {
            return state.posts.length;
        },
        getInitLoad (state) {
            return state.initLoad;
        },
        all (state) {
            return state.posts;
        },
        everyTen (state) {
            return state.posts.filter(post => post.id % 10 === 1);
        },
        newsPosts() {
            return state.posts.filter(post => post.type === 'news');
        },
    },




    mutations: {
        addPost(state, data) {
            state.posts.push(data);
        }
    },





    actions: {
        firstLoadPosts(context) {
            if (!context.state.initLoad) {
                context.state.initLoad = true;
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => context.state.posts = context.state.posts.concat(json));
                // .then((json) => context.state.posts = json);
            }
        },
        loadPosts(context) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => context.state.posts = context.state.posts.concat(json));
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


