import Home from '@views/Home.vue';
import Chat from '@views/Chat.vue';
import Settings from '@views/Settings.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

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

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
