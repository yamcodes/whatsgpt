<template>
  <router-link to="/">
    <Tooltip msg="Home">
      <HomeIcon class="h-10 w-10" />
    </Tooltip>
  </router-link>
</template>

<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid';
import Tooltip from '@components/Tooltip.vue';
</script>
