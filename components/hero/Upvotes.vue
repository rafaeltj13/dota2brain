<script setup lang="ts">
defineProps({
  upvotes: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <p class="text-xl font-bold flex gap-2">
    {{ upvotes }}
    <Icon name="ic:baseline-arrow-upward" class="w-6 h-6" />
  </p>
</template>
