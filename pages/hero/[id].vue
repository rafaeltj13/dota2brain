<script setup lang="ts">
import type { Database } from "~/database.types";

const { id } = useRoute().params;

const { data, error } = useFetch(`/api/hero/${id}`);

const ideas = ref([
  {
    id: 1,
    title: "PL RUSH AGHS",
    tags: ["PL RUSH", "AGHS"],
  },
  {
    id: 2,
    title: "Farm farm farm",
    tags: ["Farm"],
  },
  {
    id: 3,
    title: "Late game menace",
    tags: ["Late game", "Menace"],
  },
  {
    id: 4,
    title: "Safe lane",
    tags: ["Safe lane"],
  },
  {
    id: 5,
    title: "Mid lane bully",
    tags: ["Mid lane", "Bully"],
  },
  {
    id: 6,
    title: "Active vs passive",
    tags: ["Active vs passive"],
  },
  {
    id: 7,
    title: "Dispel",
    tags: ["Dispel"],
  },
  {
    id: 8,
    title: "EZ Win",
    tags: ["EZ Win"],
  },
]);

const pageTitle = computed(() => `${hero.value.name} - Ideas`);
const hero = computed(() => {
  const currentHero = data.value?.data as
    | Database["public"]["Tables"]["heroes"]["Row"]
    | null;

  return {
    ...currentHero,
    name: currentHero?.name || "Unknown Hero",
  };
});

useHead({
  title: pageTitle || "Ideas",
});
</script>

<template>
  <div
    v-if="hero"
    class="bg-background max-w-screen-2xl mx-auto grid gap-8 lg:pt-20 -pt-40 pb-20"
  >
    <img
      :src="hero.img ?? ''"
      :alt="hero.name ?? ''"
      class="w-full h-80 object-cover lg:rounded-xl mx-auto"
    />
    <div class="col-span-1 gap-6">
      <h1 class="text-5xl font-bold pb-4">
        <HeroAttributeImage :hero-attribute="hero.primaryAttr ?? ''" />
        {{ hero?.name ?? "" }}
      </h1>
      <div class="flex gap-2">
        <Badge
          v-for="role in hero.roles?.split(',') || []"
          :key="role"
          variant="secondary"
          >{{ role }}</Badge
        >
      </div>
    </div>
    <IdeaList v-if="ideas.length > 0" :ideas="ideas" />
    <IdeaEmpty v-else />
  </div>
</template>
