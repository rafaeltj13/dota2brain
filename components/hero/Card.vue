<script setup lang="ts">
const props = defineProps({
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
    class="bg-background border-border border rounded-xl w-full hover:scale-110 transition-all duration-300 hover:cursor-pointer"
  >
    <HeroImage :hero-name="heroName" />
    <div class="flex justify-between w-full h-full p-4">
      <div class="gap-3 flex flex-col rounded-b-xl">
        <h1 class="text-2xl font-bold">
          <img
            :src="`https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${heroAttribute.toLowerCase()}.png`"
            class="w-6 h-6 inline-block mr-1"
            :alt="heroAttribute"
          />
          {{ heroName }}
        </h1>
        <div class="flex gap-2">
          <Badge v-for="badge in badges" variant="outline">{{ badge }}</Badge>
        </div>
      </div>
      <p class="text-xl font-bold flex gap-2">
        {{ upvotes }}
        <Icon name="ic:baseline-arrow-upward" class="w-6 h-6" />
      </p>
    </div>
  </div>
</template>
