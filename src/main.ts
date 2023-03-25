import devtools from '@vue/devtools';
import { createApp } from 'vue';
import '@/style.scss';
import App from '@/App.vue';
import '@/samples/node-api.ts';
import 'virtual:windi.css'; // See: https://windicss.org/integrations/vite.html
import router from '@/router';

createApp(App).use(router).mount('#app');

// Will be triggered with `yarn dev`
if (process.env.DEVTOOLS) 
  devtools.connect();
  