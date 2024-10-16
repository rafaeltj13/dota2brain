<script setup lang="ts">
defineProps({
  heroName: {
    type: String,
    required: true,
  },
  heroImageUrl: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <img
    :src="heroImageUrl"
    :alt="heroName"
    class="w-full h-60 object-cover rounded-xl"
  />
</template>
