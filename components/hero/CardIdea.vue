<script setup lang="ts">
defineProps({
  heroName: {
    type: String,
    required: true,
  },
  heroAttribute: {
    type: String,
    required: true,
  },
  badges: {
    type: Array as PropType<string[]>,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div
    @click="navigateTo(`/idea/${heroName}`)"
    class="bg-background border-border border rounded-xl w-full hover:scale-110 transition-all duration-300 hover:cursor-pointer"
  >
    <HeroImage :hero-name="heroName" />
    <div class="flex justify-between w-full h-full p-4">
      <div class="gap-3 flex flex-col rounded-b-xl">
        <h1 class="text-2xl font-bold">
          <HeroAttributeImage :hero-attribute="heroAttribute" />
          {{ heroName }}
        </h1>
        <HeroBadges :badges="badges" />
      </div>
      <HeroUpvotes :upvotes="upvotes" />
    </div>
  </div>
</template>
