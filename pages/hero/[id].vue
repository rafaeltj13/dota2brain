<script setup lang="ts">
const route = useRoute();
const id = ref(route.params.id);
const loading = ref(true);

const fetchHero = async () => {
  const { data } = await useFetch(`/api/hero/${id.value}`);
  return data.value?.data as IHero;
};

const fetchHeroIdeas = async () => {
  const { data } = await useFetch(`/api/idea/hero/${hero.value?.id}`);
  return data.value?.data.map(
    (idea) => ({ ...idea, hero: hero.value } as IIdea)
  ) as IIdea[];
};

const hero = ref<IHero | null>(null);
const heroIdeas = ref<IIdea[]>([]);

hero.value = await fetchHero();
heroIdeas.value = await fetchHeroIdeas();
loading.value = false;

watch(
  () => route.params.id,
  async (newId) => {
    id.value = newId;
    loading.value = true;
    hero.value = await fetchHero();
    heroIdeas.value = await fetchHeroIdeas();
    loading.value = false;
  }
);

const pageTitle = computed(() => `${hero.value?.name} - Ideas`);
useHead({
  title: pageTitle || "Ideas",
});
</script>

<template>
  <div
    v-if="loading"
    class="pt-32 max-w-screen-2xl mx-auto w-full flex items-center justify-center px-8 xl:px-0"
  >
    <LayoutLoading />
  </div>
  <div
    v-else
    class="bg-background max-w-screen-2xl mx-auto grid gap-8 pt-32 pb-20 px-8 xl:px-0"
    v-motion-slide-bottom
  >
    <div class="col-span-1 gap-6" v-if="hero">
      <HeroHeader :hero="hero" />
      <div class="flex gap-2">
        <Badge
          v-for="role in hero.roles?.split(',') || []"
          :key="role"
          variant="secondary"
          >{{ role }}</Badge
        >
      </div>
    </div>
    <IdeaList v-if="heroIdeas?.length > 0" :ideas="heroIdeas" />
    <IdeaEmpty v-else />
  </div>
</template>
