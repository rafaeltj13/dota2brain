<script setup lang="ts">
import type { ProcessedHero } from "../../server/api/heroes";

const { data, error } = useFetch("/api/heroes");

const heroes = computed((): ProcessedHero[] => {
  const value = data.value;
  if (value && Array.isArray(value.data)) {
    return value.data as ProcessedHero[];
  }
  return [];
});

console.log({ heroes: heroes.value, error });
</script>

<template>
  <div class="bg-background pt-40 max-w-screen-xl mx-auto">
    <h1 class="text-5xl font-bold pb-8">Heroes</h1>
    <div class="gap-6 grid grid-cols-4">
      <HeroCard
        v-for="hero in heroes"
        :key="hero.id"
        class="grid-span-2"
        :hero-name="hero.name"
        :hero-attribute="hero.primaryAttr"
        :badges="hero.roles"
        :hero-image-url="hero.img"
      />
    </div>
  </div>
</template>
