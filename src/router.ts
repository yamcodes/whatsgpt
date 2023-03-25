import { createRouter, createWebHashHistory } from 'vue-router';
import { Home, Chat, Settings, Error } from '@/views';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: { transition: 'slide-right' },
  },
  {
    path: '/chat',
    component: Chat,
    name: 'Chat',
  },
  {
    path: '/settings',
    component: Settings,
    name: 'Settings',
  },
  // catch-all redirect to 404
  {
    path: '/:pathMatch(.*)*',
    component: Error,
    name: 'error',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
