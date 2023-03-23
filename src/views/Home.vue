<!-- src/views/Home.vue -->
<template>
  <div class="hero h-screen bg-gradient-to-r from-blue-800 to-purple-900">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-white">WhatsGPT</h1>
        <p class="py-6 text-2xl text-gray-200">
          A <b>revolutionary</b> new way to communicate with friends and family.
        </p>
        <router-link to="/chat" class="btn btn-secondary"
          >Get Started</router-link
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero {
  -webkit-app-region: drag;
}
.btn {
  -webkit-app-region: no-drag;
}
</style>
