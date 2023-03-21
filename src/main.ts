import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import './samples/node-api.ts';

// Vite entries
import 'virtual:windi.css';

// Create a new Vue application
const app = createApp(App);

// Register Directives

/// Scrollable Directive
/// On mouseover, if the element is scrollable, show the scrollbar
/// On mouseout, hide the scrollbar
// app.directive("scrollable", {
//   mounted(el) {
//     el.addEventListener("mouseover", () => {
//       console.log(el.scrollHeight, el.clientHeight)
//       el.style.overflowY = "scroll";
//       console.log("scrollable")
//     });
//     el.addEventListener("mouseout", () => {
//       // el.style.overflowY = "hidden";
//       console.log("not scrollable")
//     });
//   },
// });

// Mount the Vue app to the DOM
const mountApp = () => {
  app
    .mount('#app')
    // Remove the loading indicator when the app mounts
    .$nextTick(() => {
      postMessage({ payload: 'removeLoading' }, '*');
    });
};

mountApp();
