<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  badges: {
    type: Array as PropType<string[]>,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <ClientOnly>
    <div
      class="rounded-xl hover:bg-primary hover:-translate-y-2 transition-all hover:cursor-pointer flex items-center justify-between pr-2 group"
      @click="navigateTo(`/idea/${id}`)"
    >
      <img
        :src="img ?? ''"
        :alt="title ?? ''"
        class="aspect-video w-40 object-fill rounded-xl group-hover:rounded-r-none mr-4 transition-all"
      />
      <div class="w-[80%]">
        <h1 class="text-2xl font-bold truncate w-full" :title="title">
          {{ title }}
        </h1>
        <div class="flex gap-2 pt-4">
          <Badge
            v-for="tag in badges"
            :key="tag"
            variant="default"
            class="shadow-md"
            >{{ tag }}</Badge
          >
        </div>
      </div>
      <div class="flex items-center justify-center">
        <IdeaUpvotes size="md" :upvotes="upvotes" />
      </div>
    </div>
  </ClientOnly>
</template>
