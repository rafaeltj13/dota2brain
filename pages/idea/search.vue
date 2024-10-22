<script setup lang="ts">
const { fetchIdeas } = useIdeas();

const loading = ref(true);
const ideas = ref<IIdea[]>([]);

ideas.value = await fetchIdeas();
loading.value = false;

useHead({
  title: "Ideas",
});
</script>

<template>
  <div class="bg-background pt-32 max-w-screen-2xl mx-auto xl:px-0 px-8">
    <h1 class="text-5xl font-bold pb-8" v-motion-fade>Ideas</h1>
    <div v-if="loading">
      <LayoutLoading />
    </div>
    <IdeaList
      v-else
      v-motion-slide-bottom
      v-if="ideas.length > 0"
      :ideas="ideas"
    />
  </div>
</template>
