<script setup lang="ts">
import { Direction } from '@types';
import { getBeforeDimensions } from '@utils';
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    msg: string;
    dir?: Direction | 'auto';
  }>(),
  {
    dir: 'auto',
  }
);

const isHovered = ref(false);
const tooltip = ref(<HTMLElement | null>null);

const tooltipDirection = computed(() => {
  const { dir } = props;
  if (dir !== 'auto') return dir;
  const tooltipRect = tooltip.value?.getBoundingClientRect();
  const { width: beforeWidth } = getBeforeDimensions(tooltip.value);
  if (!tooltipRect) return dir;
  const viewport = {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };

  if (tooltipRect.right + beforeWidth > viewport.width) return 'left';
  if (tooltipRect.left - beforeWidth < 0) return 'right';
  if (tooltipRect.top - beforeWidth < 0) return 'bottom';
  if (tooltipRect.bottom + beforeWidth > viewport.height) return 'top';

  return dir;
});

const tooltipClass = computed(() => ({
  'tooltip-open': isHovered.value,
  [`tooltip-${tooltipDirection.value}`]: tooltipDirection.value,
}));
</script>
<template>
  <div
    class="tooltip"
    :data-tip="msg"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :class="tooltipClass"
    ref="tooltip"
  >
    <slot />
  </div>
</template>
