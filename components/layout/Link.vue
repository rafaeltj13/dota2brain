<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>

<template>
  <p @click="navigateTo(href)" class="cursor-pointer">
    <slot />
  </p>
</template>
