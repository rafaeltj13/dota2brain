<script setup lang="ts">
const props = defineProps({
  badges: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Badge v-for="badge in badges" variant="default">{{ badge }}</Badge>
  </div>
</template>
