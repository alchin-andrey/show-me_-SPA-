import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, getMultiFactorResolver } from "firebase/auth";

// -----------------------------------------------------//
import { getDatabase, ref, set, update, child, connectDatabaseEmulator } from "firebase/database";

function generateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return newGuid;
}
// -----------------------------------------------------//

function isValidToken (token) {
    return token !== undefined;
}

function isValidAdmin (email) {
    return email === 'dr.zoidberg@gmail.com';
}

export default {
    namespaced: true,
    state: () => ({
        token: '',
        id: '',
        account: {},
        user: {},
    }),
    getters: {
        isAdmin (state) {
            return isValidAdmin (state.account.email);
        },
        isAuth (state) {
            return isValidToken(state.account.accessToken);
        },
        userId (state) {
            return state.account.uid;
        },
        userEmail (state) {
            return state.account.email;
        },
        userAvatar (state) {
            console.log ('state.user.avatar', state.user.avatar)
            return state.user.avatar;
        },
        userlogin (state) {
            console.log ('state.user.login', state.user.login)
            return state.user.login;
        },
        // -------------------------------------- //
        all (state) {
            console.log ('state.user', state.user)
            return state.user;
        },
        // -------------------------------------- //
    },
    mutations: {
        setAuthUser (state, data) {
            state.account = data || {};
            // state.token = data.accessToken;
        },
        // -------------------------------------- //
        addUser(state, data) {
            console.log('DATA', data)
            state.user = data;
        },
        clear(state) {
            state.user = {};
        },
        // -------------------------------------- //
    },
    actions: {
        doAuth (context, data) {
            const auth = getAuth();

            return signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                context.state.account = userCredential.user;
                    return 'OK';
            })
            .catch((error) => {
                const errorMessage = error.message;
                return `error: ${errorMessage}`;
            });
        },
        logout (context) {
            context.state.token = '';
            context.state.id = '';
            context.state.user = {};
            const auth = getAuth();
            return signOut(auth).then(() => 'OK');
        },
        doCreate (context, data) {
            const auth = getAuth();

            return createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                context.state.account = userCredential.user;
                console.log('Auth user', context.state.account);
                    return 'OK';
            })
            .catch((error) => {
                const errorMessage = error.message;
                return `error: ${errorMessage}`;
            });
        },
            // --------------------------------------------------//
            createUser(context, data) {
                console.log('createUser', data)
                data.id = context.state.account.uid;
                const db = getDatabase();
                set(ref(db, 'users/'+ data.id), data)
            },
        
            // updatePost(context, data) {
            //     const updates = {};
            //     updates['/users/' + data.id] = data;
            //     const db = getDatabase();
            //     return update(ref(db), updates);
            // },
        
            // deletePost(context, id) {
            //     const updates = {};
            //     updates['/users/' + id] = null;
            //     const db = getDatabase();
            //     return update(ref(db), updates);
            // }
            // --------------------------------------------------//
    },

};


