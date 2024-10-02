<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
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
    @click="navigateTo(`/idea/${id}`)"
  >
    <div class="w-[80%]">
      <h1 class="text-2xl font-bold truncate w-full" :title="title">
        {{ title }}
      </h1>
      <div class="flex gap-2 pt-4">
        <Badge v-for="tag in tags" :key="tag" variant="secondary">{{
          tag
        }}</Badge>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <IdeaUpvotes size="md" :upvotes="11" />
    </div>
  </div>
</template>
