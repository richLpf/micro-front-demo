import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=> import('./components/vue-home')
const List = ()=> import('./components/vue-list')

const routes = [  
    {    path: '/',    name: 'home',    component: Home,  }, 
    {    path: '/list',    name: 'list',    component: List  },
]

const router = createRouter({  
    history: createWebHistory('/vue'),  
    routes
})

export default router