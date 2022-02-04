import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import NavButton from "@/components/ui/NavButton.vue";
import MyInput from "@/components/ui/MyInput.vue";
import MyButton from "@/components/ui/MyButton.vue";
import MyTextarea from "@/components/ui/MyTextarea.vue";
import MyCheckbox from "@/components/ui/MyCheckbox.vue";
import MyRadio from "@/components/ui/MyRadio.vue";
import MyRadioArr from "@/components/ui/MyRadioArr.vue";
import MySelect from "@/components/ui/MySelect.vue";
import MyDialog from "@/components/ui/MyDialog.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDPhMmf3RI4uoZ9o-HC8ErobxtpyBoR5Ks",
    authDomain: "show-to-me.firebaseapp.com",
    databaseURL: "https://show-to-me-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "show-to-me",
    storageBucket: "show-to-me.appspot.com",
    messagingSenderId: "648756865481",
    appId: "1:648756865481:web:e8cfb3eb45de685889e018"
};

initializeApp(firebaseConfig);







const auth = getAuth();
let mounted = false;

const db = getDatabase();

const path = '/posts/';
onValue(ref(db, path), (snapshot) => {
console.log('onValue for', path, snapshot.val());
  store.commit('posts/clear');
  const postsObject = snapshot.val();
  for (const [key, value] of Object.entries(postsObject)) {
    store.commit('posts/addPost', value);
  }
});



onAuthStateChanged(auth, (user) => {
    store.commit('user/setAuthUser', user);
    console.log('onAuthStateChanged', user);
    if (!mounted) {
        app.use(router);
        app.mount('#app');
        mounted = true;
    }
});


const app = createApp(App);
app.use(store);
app.component('NavButton', NavButton);
app.component('MyInput', MyInput);
app.component('MyButton', MyButton);
app.component('MyTextarea', MyTextarea);
app.component('MyCheckbox', MyCheckbox);
app.component('MyRadio', MyRadio);
app.component('MyRadioArr', MyRadioArr);
app.component('MySelect', MySelect);
app.component('MyDialog', MyDialog);


