<template>
  <div class="chat-container">
    <div
      class="chat"
      v-for="(chat, index) in mockChat"
      :key="index"
      :class="getClass(chat)"
    >
      <div class="chat-header">
        {{ chat.name }}
        <Tooltip :msg="getTime(index, true)">
          <time
            class="text-xs opacity-50 hover:cursor-pointer hover:underline"
            >{{ getTime(index) }}</time
          >
        </Tooltip>
      </div>
      <div class="chat-bubble select-text">
        {{ chat.message }}
      </div>
      <div class="chat-footer opacity-50">
        {{ getFooter(index) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tooltip from './Tooltip.vue';

interface ChatMessage {
  name: string;
  message: string;
}

type Chat = ChatMessage[];

const props = defineProps({
  mockChat: {
    type: Array as () => Chat,
    required: true,
  },
});

const getTime = (index: number, long?: boolean) => {
  const n = props.mockChat.length;
  const time = new Date();
  time.setHours(time.getHours() - n + index);
  if (long)
    return `${time.toDateString()}@${time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })}`;
  return time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
};

const getFooter = (index: number) => (index % 2 === 0 ? 'Seen' : 'Delivered');

const getClass = (chat: ChatMessage) => {
  const classes = ['chat'];

  // get all names in mockChat
  const names = props.mockChat.map((chatElem: ChatMessage) => chatElem.name);

  if (chat.name === names[0]) classes.push('chat-start');
  else classes.push('chat-end');
  return classes;
};
</script>
