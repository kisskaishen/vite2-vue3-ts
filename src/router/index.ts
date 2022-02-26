import {createRouter,createWebHistory} from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'


export const routes = [
	{
		path:'/',
		component:Home,
		meta:{title:'Home'}
	},
	{
		path: '/about',
		meta: { title: 'About' },
		component: About,
	},
	{ path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
	history:createWebHistory(),
	routes
})

export default router;