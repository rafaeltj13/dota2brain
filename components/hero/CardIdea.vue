<script setup lang="ts">
defineProps({
  heroName: {
    type: String,
    required: true,
  },
  heroImageUrl: {
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
  <ClientOnly>
    <div
      @click="navigateTo(`/idea/${heroName}`)"
      class="rounded-xl w-full hover:-translate-y-2 transition-all duration-150 hover:cursor-pointer"
    >
      <HeroImage :hero-name="heroName" :hero-image-url="heroImageUrl" />
      <div class="flex justify-between w-full h-full py-4">
        <div class="gap-3 flex flex-col rounded-b-xl">
          <h1 class="text-2xl font-bold">
            <HeroAttributeImage :hero-attribute="heroAttribute" />
            {{ heroName }}
          </h1>
          <HeroBadges :badges="badges" />
        </div>
        <IdeaUpvotes :upvotes="upvotes" />
      </div>
    </div>
  </ClientOnly>
</template>
