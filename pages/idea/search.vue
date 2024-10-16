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

const ideas = computed(() => [
  {
    id: 1,
    title: "PL RUSH AGHS",
    tags: ["PL RUSH", "AGHS"],
    img: heroes.value[0].img ?? "",
  },
  {
    id: 2,
    title: "Farm farm farm",
    tags: ["Farm"],
    img: heroes.value[1].img ?? "",
  },
  {
    id: 3,
    title: "Late game menace",
    tags: ["Late game", "Menace"],
    img: heroes.value[2].img ?? "",
  },
  {
    id: 4,
    title: "Safe lane",
    tags: ["Safe lane"],
    img: heroes.value[3].img ?? "",
  },
  {
    id: 5,
    title: "Mid lane bully",
    tags: ["Mid lane", "Bully"],
    img: heroes.value[4].img ?? "",
  },
  {
    id: 6,
    title: "Active vs passive",
    tags: ["Active vs passive"],
    img: heroes.value[5].img ?? "",
  },
  {
    id: 7,
    title: "Dispel",
    tags: ["Dispel"],
    img: heroes.value[6].img ?? "",
  },
  {
    id: 8,
    title: "EZ Win",
    tags: ["EZ Win"],
    img: heroes.value[7].img ?? "",
  },
]);

useHead({
  title: "Ideas",
});
</script>

<template>
  <div class="bg-background pt-32 max-w-screen-2xl mx-auto">
    <h1 class="text-5xl font-bold pb-8" v-motion-fade>Ideas</h1>
    <IdeaList v-motion-slide-bottom v-if="heroes.length > 0" :ideas="ideas" />
  </div>
</template>
