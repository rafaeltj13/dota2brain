<template>
  <img
    :src="heroImageUrl"
    :alt="heroName"
    class="w-full h-full object-cover rounded-t-xl"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  heroName: {
    type: String,
    required: true,
  },
});

const heroImageUrl = computed(() => {
  return `https://cdn.dota2.com/apps/dota2/images/heroes/${props.heroName}_full.png`;
});
</script>
