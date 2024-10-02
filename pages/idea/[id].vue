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
    ...currentHero,
    name: currentHero?.name || "Unknown Hero",
  };
});

useHead({
  title: pageTitle || "Ideas",
});

const currentIdea = computed(() => {
  return {
    id: 1,
    hero: hero.value,
    title: "PL RUSH AGHS",
    upvotes: 100,
    downvotes: 10,
    gameIdeas: [
      {
        title: "Early Game 0-10 min",
        badges: ["PL RUSH", "AGHS"],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore morem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore morem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore morem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        title:
          "MidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25minMidGame10-25min",
        badges: ["Farm", "Farm", "Farm", "Farm", "Farm", "Farm"],
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title:
          "Late Game 25+ min Late Game 25+ min Late Game 25+ min Late Game 25+ min Late Game 25+ min",
        badges: ["Late game", "Menace"],
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  };
});
</script>

<template>
  <div
    class="bg-background max-w-screen-2xl mx-auto grid gap-8 lg:pt-20 -pt-40 lg:grid-cols-3 pb-20"
  >
    <div class="col-span-1 gap-4 flex flex-col px-8 lg:px-0">
      <h1 class="text-5xl font-bold flex items-center gap-4">
        <!-- TODO: Change to hero icon in minimap -->
        <img
          :src="hero.img ?? ''"
          :alt="hero.name ?? ''"
          class="w-10 h-10 object-cover lg:rounded-xl"
        />{{ hero?.name ?? "" }}
        <HeroAttributeImage :hero-attribute="hero.primaryAttr ?? ''" />
      </h1>
      <div class="flex gap-2">
        <Badge
          v-for="role in hero.roles?.split(',') || []"
          :key="role"
          variant="secondary"
          >{{ role }}</Badge
        >
      </div>
      <h2
        class="text-4xl font-bold pt-6 cursor-pointer hover:text-primary transition-all"
        @click="navigateTo(`/hero/${hero.id}`)"
      >
        Other ideas
      </h2>
      <div class="gap-4 flex flex-col px-8 lg:px-0">
        <IdeaItem id="1" title="PL RUSH AGHS" :tags="['PL RUSH', 'AGHS']" />
        <IdeaItem id="2" title="Farm farm farm" :tags="['Farm']" />
        <IdeaItem
          id="3"
          title="Late game menace"
          :tags="['Late game', 'Menace']"
        />
        <IdeaItem id="4" title="Safe lane" :tags="['Safe lane']" />
        <IdeaItem id="5" title="Mid lane bully" :tags="['Mid lane', 'Bully']" />
        <IdeaItem
          id="6"
          title="Active vs passive"
          :tags="['Active vs passive']"
        />
        <IdeaItem id="7" title="Dispel" :tags="['Dispel']" />
        <IdeaItem id="8" title="EZ Win" :tags="['EZ Win']" />
        <IdeaItem id="9" title="PL RUSH AGHS" :tags="['PL RUSH', 'AGHS']" />
        <IdeaItem id="10" title="Farm farm farm" :tags="['Farm']" />
        <IdeaItem
          id="11"
          title="Late game menace"
          :tags="['Late game', 'Menace']"
        />
        <IdeaItem id="12" title="Safe lane" :tags="['Safe lane']" />
        <IdeaItem
          id="13"
          title="Mid lane bully"
          :tags="['Mid lane', 'Bully']"
        />
        <IdeaItem
          id="14"
          title="Active vs passive"
          :tags="['Active vs passive']"
        />
        <IdeaItem id="15" title="Dispel" :tags="['Dispel']" />
        <IdeaItem id="16" title="EZ Win" :tags="['EZ Win']" />
      </div>
    </div>
    <div class="col-span-2">
      <div class="flex justify-between items-start">
        <h1 class="text-5xl font-bold pb-20">{{ currentIdea.title }}</h1>
        <IdeaReactions :upvotes="currentIdea.upvotes - currentIdea.downvotes" />
      </div>
      <div
        class="gap-4 flex flex-col px-8 lg:px-0 pb-12"
        v-for="idea in currentIdea.gameIdeas"
      >
        <h2 class="text-4xl font-bold text-primary">{{ idea.title }}</h2>
        <p class="text-xl">{{ idea.description }}</p>
        <div class="flex gap-2 items-start">
          <Badge
            v-for="badge in idea.badges"
            :key="badge"
            variant="secondary"
            >{{ badge }}</Badge
          >
        </div>
      </div>
    </div>
  </div>
</template>
