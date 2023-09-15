import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/pages/ViewNotes.vue'
import ViewStats from '@/pages/ViewStats.vue'
import EditNote from '@/pages/ViewEditNote.vue'
import ViewAuth from '@/pages/ViewAuth.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/edit-note/:id',
    name: 'edit-note',
    component: EditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/auth',
    name: 'auth',
    component: ViewAuth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
