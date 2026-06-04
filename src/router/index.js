import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Story from '../views/Story.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/story', name: 'Story', component: Story },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
