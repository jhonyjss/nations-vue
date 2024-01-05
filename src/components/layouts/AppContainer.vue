<template>
  <div
    :class="[
      'container mx-auto px-4 md:px-0',
      customClass ? customClass : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    customClass?: string;
  }>();
</script>
