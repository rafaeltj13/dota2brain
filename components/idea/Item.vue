<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <div
    class="border-2 rounded-xl px-4 py-6 hover:bg-primary transition-all hover:cursor-pointer flex items-center justify-between"
  >
    <div>
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <div class="flex gap-2 pt-4">
        <Badge v-for="tag in tags" :key="tag" variant="secondary">{{
          tag
        }}</Badge>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <h3 class="text-xl font-bold">{{ Math.random() * 100 }}</h3>
      <Icon name="ic:baseline-arrow-upward" class="w-6 h-6" />
    </div>
  </div>
</template>
