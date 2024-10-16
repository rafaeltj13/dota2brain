<script setup lang="ts">
import type { Database } from "~/database.types";

const { id } = useRoute().params;

const { data, error } = useFetch(`/api/hero/${id}`);

const pageTitle = computed(() => `${hero.value.name} - Ideas`);
const hero = computed(() => {
  const currentHero = data.value?.data as
    | Database["public"]["Tables"]["heroes"]["Row"]
    | null;

  return {
    name: currentHero?.name || "Unknown Hero",
    img: currentHero?.img || "",
    primaryAttr: currentHero?.primaryAttr || "",
    roles: currentHero?.roles || "",
  };
});

const ideas = computed(() => [
  {
    id: 1,
    title: "PL RUSH AGHS",
    tags: ["PL RUSH", "AGHS"],
    img: hero.value.img ?? "",
  },
  {
    id: 2,
    title: "Farm farm farm",
    tags: ["Farm"],
    img: hero.value.img ?? "",
  },
  {
    id: 3,
    title: "Late game menace",
    tags: ["Late game", "Menace"],
    img: hero.value.img ?? "",
  },
  {
    id: 4,
    title: "Safe lane",
    tags: ["Safe lane"],
    img: hero.value.img ?? "",
  },
  {
    id: 5,
    title: "Mid lane bully",
    tags: ["Mid lane", "Bully"],
    img: hero.value.img ?? "",
  },
  {
    id: 6,
    title: "Active vs passive",
    tags: ["Active vs passive"],
    img: hero.value.img ?? "",
  },
  {
    id: 7,
    title: "Dispel",
    tags: ["Dispel"],
    img: hero.value.img ?? "",
  },
  {
    id: 8,
    title: "EZ Win",
    tags: ["EZ Win"],
    img: hero.value.img ?? "",
  },
]);

useHead({
  title: pageTitle || "Ideas",
});
</script>

<template>
  <div
    v-if="hero"
    class="bg-background max-w-screen-2xl mx-auto grid gap-8 pt-32 pb-20"
    v-motion-slide-bottom
  >
    <div class="col-span-1 gap-6">
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
    <IdeaList v-if="ideas.length > 0" :ideas="ideas" />
    <IdeaEmpty v-else />
  </div>
</template>
