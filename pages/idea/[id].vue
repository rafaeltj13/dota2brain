<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);
const loading = ref(true);

const { fetchIdea, fetchOtherIdeas } = useIdeas();

const currentIdea = ref<IIdea | null>(null);
const otherIdeas = ref<IIdea[]>([]);

currentIdea.value = await fetchIdea(id.value as string);
otherIdeas.value = await fetchOtherIdeas(id.value as string);
loading.value = false;

watch(
  () => route.params.id,
  async (newId) => {
    id.value = newId;
    loading.value = true;
    currentIdea.value = await fetchIdea(id.value as string);
    otherIdeas.value = await fetchOtherIdeas(id.value as string);
    loading.value = false;
  }
);

const hero = computed(() => {
  return currentIdea.value?.hero;
});

const pageTitle = computed(
  () => `${currentIdea.value?.title || "Idea"} - Ideas`
);

useHead({
  title: pageTitle,
});
</script>

<template>
  <div
    v-if="loading"
    class="pt-32 max-w-screen-2xl mx-auto w-full flex items-center justify-center px-8 xl:px-0"
  >
    <LayoutLoading />
  </div>
  <div v-else v-motion-slide-bottom class="px-8">
    <div
      class="bg-background max-w-screen-2xl mx-auto gap-8 pt-32 pb-20"
      v-if="currentIdea && hero"
    >
      <HeroHeader :hero="hero" />
      <div class="flex gap-2 pb-12">
        <Badge
          v-for="role in hero.roles?.split(',') || []"
          :key="role"
          variant="secondary"
          >{{ role }}</Badge
        >
      </div>
      <div class="">
        <div class="flex justify-between items-start mb-4">
          <h1 class="text-5xl font-bold pb-8">{{ currentIdea.title }}</h1>
          <IdeaReactions :upvotes="currentIdea.upvotes" />
        </div>
        <IdeaMenu :idea="currentIdea" />
      </div>
      <div class="pt-20">
        <h2
          class="text-4xl font-bold py-8 cursor-pointer hover:text-primary transition-all hover:-translate-y-2"
          @click="navigateTo(`/hero/${hero.id}`)"
        >
          Other ideas
        </h2>
        <IdeaList v-if="otherIdeas?.length > 0" :ideas="otherIdeas" />
        <IdeaEmpty v-else />
      </div>
    </div>
  </div>
</template>
