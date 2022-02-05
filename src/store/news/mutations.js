export default {
    addPost(state, data) {
        state.news.push(data);
    },
    clear(state) {
        state.news = [];
    }
}