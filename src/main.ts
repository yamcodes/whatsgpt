import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './samples/node-api.ts';

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
  });
