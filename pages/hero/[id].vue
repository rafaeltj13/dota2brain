<script setup lang="ts">
import type { Database } from "~/database.types";

const { id } = useRoute().params;

const { data, error } = useFetch(`/api/hero/${id}`);

const hero = computed(() => {
  const currentHero = data.value?.data as
    | Database["public"]["Tables"]["heroes"]["Row"]
    | null;

  return {
    ...currentHero,
    name: currentHero?.name || "Unknown Hero",
  };
});
</script>

<template>
  <div
    v-if="hero"
    class="bg-background max-w-screen-xl mx-auto grid gap-8 lg:pt-20 -pt-40 lg:px-8"
  >
    <img
      :src="hero.img ?? ''"
      :alt="hero.name ?? ''"
      class="w-full h-80 object-cover lg:rounded-xl mx-auto"
    />
    <div class="col-span-1 gap-4 flex flex-col px-8 lg:px-0">
      <h1 class="text-5xl font-bold pb-4">{{ hero?.name ?? "" }}</h1>
      <div class="flex gap-2">
        <Badge
          v-for="role in hero.roles?.split(',') || []"
          :key="role"
          variant="secondary"
          >{{ role }}</Badge
        >
      </div>
    </div>
    <div class="col-span-1 gap-4 flex flex-col px-8 lg:px-0">
      <IdeaItem title="PL RUSH AGHS" :tags="['PL RUSH', 'AGHS']" />
      <IdeaItem title="Farm farm farm" :tags="['Farm']" />
      <IdeaItem title="Late game menace" :tags="['Late game', 'Menace']" />
      <IdeaItem title="Safe lane" :tags="['Safe lane']" />
      <IdeaItem title="Mid lane bully" :tags="['Mid lane', 'Bully']" />
      <IdeaItem title="Active vs passive" :tags="['Active vs passive']" />
      <IdeaItem title="Dispel" :tags="['Dispel']" />
      <IdeaItem title="EZ Win" :tags="['EZ Win']" />
      <IdeaItem title="PL RUSH AGHS" :tags="['PL RUSH', 'AGHS']" />
      <IdeaItem title="Farm farm farm" :tags="['Farm']" />
      <IdeaItem title="Late game menace" :tags="['Late game', 'Menace']" />
      <IdeaItem title="Safe lane" :tags="['Safe lane']" />
      <IdeaItem title="Mid lane bully" :tags="['Mid lane', 'Bully']" />
      <IdeaItem title="Active vs passive" :tags="['Active vs passive']" />
      <IdeaItem title="Dispel" :tags="['Dispel']" />
      <IdeaItem title="EZ Win" :tags="['EZ Win']" />
    </div>
  </div>
</template>
