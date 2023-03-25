<template>
  <div class="hero h-screen bg-gradient-to-r from-red-800 to-red-900">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-white">404</h1>
        <p class="py-6 text-2xl text-gray-200">
          That's an error. The requested URL <code>{{ currentUrl }}</code> was
          not found on this server.
        </p>
        <p class="py-6 text-2xl text-gray-200">That's all we know.</p>
        <router-link to="/" class="btn btn-error">Go Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentUrl = window.location.href.split('/').pop();
</script>
