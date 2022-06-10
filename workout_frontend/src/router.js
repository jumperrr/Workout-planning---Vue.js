import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Exercises from './components/Exercises.vue';
import Register from './components/Register.vue';


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/exercises', component: Exercises },
    { path: '/register', component: Register },

  ]
})