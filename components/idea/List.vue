<script setup lang="ts">
// import type { Database } from "~/database.types";

const props = defineProps<{
  // ideas: Database["public"]["Tables"]["ideas"]["Row"][];
  ideas: {
    id: number;
    title: string;
    tags: string[];
    img: string;
  }[];
}>();
</script>

<template>
  <div class="col-span-1 gap-6 px-8 lg:px-0 grid grid-cols-3">
    <IdeaItem
      v-for="idea in ideas"
      :key="idea.id"
      :id="idea.id"
      :title="idea.title"
      :tags="idea.tags"
      :img="idea.img"
    />
  </div>
</template>
