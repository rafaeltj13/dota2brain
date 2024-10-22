<script setup lang="ts">
const { fetchHeroes } = useHeroes();

const loading = ref(true);
const heroes = ref<IHero[]>([]);

heroes.value = await fetchHeroes();
loading.value = false;

useHead({
  title: "Heroes",
});
</script>

<template>
  <div class="bg-background pt-32 max-w-screen-2xl mx-auto xl:px-0 px-8">
    <h1 class="text-5xl font-bold pb-8" v-motion-fade>Heroes</h1>
    <div
      v-if="loading"
      class="pt-32 max-w-screen-2xl mx-auto w-full flex items-center justify-center px-8 xl:px-0"
    >
      <LayoutLoading />
    </div>
    <div class="gap-8 grid grid-cols-5" v-motion-slide-bottom>
      <HeroCard
        v-for="hero in heroes"
        :key="hero.id"
        class="grid-span-2"
        :hero-id="hero.id ?? 0"
        :hero-name="hero.name ?? ''"
        :hero-attribute="hero.primaryAttr ?? ''"
        :badges="(hero.roles ?? '').split(',')"
        :hero-image-url="hero.img ?? ''"
      />
    </div>
  </div>
</template>
