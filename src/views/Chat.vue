<template>
  <div>
    <button class="btn" data-set-theme="light" data-act-class="ACTIVECLASS">
      Light
    </button>
    <button class="btn" data-set-theme="dracula" data-act-class="ACTIVECLASS">
      Dracula
    </button>
    <ChatConversation :mockChat="mockChat" />
    <router-link to="/settings">
      <Tooltip msg="Settings">
        <CogIcon class="h-10 w-10" />
      </Tooltip>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/24/solid';
import { Tooltip, ChatConversation } from '@components';
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';

onMounted(() => themeChange(false)); // See: https://github.com/saadeghi/theme-change

// mock chat conversation between bob and alice
const mockChat = [
  {
    name: 'Bob',
    message: 'Hey Alice, how are you?',
  },
  {
    name: 'Alice',
    message: 'Hey Bob, I am fine, thanks!',
  },
  {
    name: 'Bob',
    message: 'That is good to hear!',
  },
  {
    name: 'Alice',
    message: 'You too!',
  },
  {
    name: 'Alice',
    message: 'Good bye. You go!',
  },
];
</script>
