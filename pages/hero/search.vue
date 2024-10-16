<script setup lang="ts">
import type { Database } from "~/database.types";

const { data, error } = useFetch("/api/hero/list");

const heroes = computed((): Database["public"]["Tables"]["heroes"]["Row"][] => {
  const value = data.value;
  if (value && Array.isArray(value.data)) {
    return value.data as Database["public"]["Tables"]["heroes"]["Row"][];
  }
  return [];
});
</script>

<template>
  <div class="bg-background pt-40 max-w-screen-2xl mx-auto">
    <h1 class="text-5xl font-bold pb-8">Heroes</h1>
    <div class="gap-8 grid grid-cols-5">
      <HeroCard
        v-for="hero in heroes"
        :key="hero.id"
        class="grid-span-2"
        :hero-id="hero.id"
        :hero-name="hero.name ?? ''"
        :hero-attribute="hero.primaryAttr ?? ''"
        :badges="(hero.roles ?? '').split(',')"
        :hero-image-url="hero.img ?? ''"
      />
    </div>
  </div>
</template>
