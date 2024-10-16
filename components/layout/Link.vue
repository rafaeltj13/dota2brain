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
  <a :href="href" :target="target">
    <slot />
  </a>
</template>
