<template>
  <div class="navbar bg-base-200 sticky top-0 z-10" v-if="$route.path !== '/'">
    <a class="ml-18 text-l">{{ title }}</a>
  </div>
  <ul class="menu" v-if="$route.path !== '/'">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/chat">Chat</router-link>
    </li>
    <li>
      <router-link to="/settings">Settings</router-link>
    </li>
  </ul>
  <router-view />
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const title = computed(() => {
  const route = useRoute();
  const { path, name } = route;
  if (path === '/') return '';
  return name;
});
</script>
<style>
.navbar {
  -webkit-app-region: drag;
}
.btn {
  -webkit-app-region: no-drag;
}

/* Fade out transition */
.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.5s;
}
.fade-out-enter,
.fade-out-leave-to {
  opacity: 0;
}
</style>
