import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Exercises from './components/Exercises.vue';
import Register from './components/Register.vue';
import MyPlans from './components/MyPlans.vue';
import MyPlan from './components/MyPlan.vue'
import NewPlan from './components/NewPlan.vue';
import Training from './components/Training.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/exercises', component: Exercises },
    { path: '/register', component: Register },
    { path: '/myplans', component: MyPlans },
    { path: '/myplan/:id', component: MyPlan },
    { path: '/newplan', component: NewPlan },
    { path: '/training/:wid/:id', component: Training },

  ]
})