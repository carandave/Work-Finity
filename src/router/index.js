import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'
import AddJob from '@/views/AddJob.vue'
import EditJobView from '@/views/EditJobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
    },

    {
      path: '/jobs/edit/:id',
      name: 'job-edit',
      component: EditJobView,
    },

    {
      path: '/jobs/add',
      name: 'job-add',
      component: AddJob,
    },

    
  ],
})

export default router
