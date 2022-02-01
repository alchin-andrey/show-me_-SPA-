import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

function isValidToken (token) {
    return token !== undefined;
}

export default {
    namespaced: true,
    state: () => ({
        token: '',
        name: '',
        user: {},
    }),
    getters: { 
        isAuth(state) {
            return isValidToken(state.user.accessToken);
        },
        userEmail(state) {
            return state.user.email;
        }
    },
    mutations: {
        setAuthUser(state, data) {
            state.user = data || {};
        }
    },
    actions: {
        doAuth (context, data) {
            const auth = getAuth();
            
            return signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                context.state.user = userCredential.user;
                console.log('Auth user', context.state.user);
                    return 'OK';
            })
            .catch((error) => {
                const errorMessage = error.message;
                return `error: ${errorMessage}`;
            });
        },
        logout (context) {
            context.state.user = {};
            const auth = getAuth();
            return signOut(auth).then(() => 'OK');
        },
        doCreate (context, data) {
            const auth = getAuth();

            return createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                context.state.user = userCredential.user;
                console.log('Auth user', context.state.user);
                    return 'OK';
            })
            .catch((error) => {
                const errorMessage = error.message;
                return `error: ${errorMessage}`;
            });
        }
    },
};


