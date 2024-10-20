<script setup lang="ts">
const { data, error } = useFetch("/api/idea/list");

const ideas = computed(() => {
  return data.value?.data as IIdea[];
});

useHead({
  title: "Ideas",
});
</script>

<template>
  <div class="bg-background pt-32 max-w-screen-2xl mx-auto px-4">
    <h1 class="text-5xl font-bold pb-8" v-motion-fade>Ideas</h1>
    <LayoutLoading v-if="!ideas" />
    <IdeaList
      v-else
      v-motion-slide-bottom
      v-if="ideas.length > 0"
      :ideas="ideas"
    />
  </div>
</template>
