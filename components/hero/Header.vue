<script lang="ts" setup>
import type { Database } from "~/database.types";

const props = defineProps<{
  hero: {
    img: string;
    name: string;
    primaryAttr: string;
  };
}>();
</script>

<template>
  <h1 class="text-5xl font-bold flex items-center gap-4 pb-4">
    <img
      :src="hero.img ?? ''"
      :alt="hero.name ?? ''"
      class="aspect-video w-32 object-fill lg:rounded-xl mr-4"
    />{{ hero?.name ?? "" }}
    <HeroAttributeImage :hero-attribute="hero.primaryAttr ?? ''" />
  </h1>
</template>
