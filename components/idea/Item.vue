<script setup lang="ts">
defineProps({
  id: {
    type: [String, Number] as PropType<string | number>,
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
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ClientOnly>
    <div
      class="rounded-xl hover:bg-primary hover:-translate-y-2 transition-all hover:cursor-pointer flex items-center justify-between pr-2"
      @click="navigateTo(`/idea/${id}`)"
    >
      <img
        :src="img ?? ''"
        :alt="title ?? ''"
        class="aspect-video w-40 object-fill lg:rounded-xl mr-4"
      />
      <div class="w-[80%]">
        <h1 class="text-2xl font-bold truncate w-full" :title="title">
          {{ title }}
        </h1>
        <div class="flex gap-2 pt-4">
          <Badge
            v-for="tag in tags"
            :key="tag"
            variant="default"
            class="shadow-md"
            >{{ tag }}</Badge
          >
        </div>
      </div>
      <div class="flex items-center justify-center">
        <IdeaUpvotes size="md" :upvotes="11" />
      </div>
    </div>
  </ClientOnly>
</template>
