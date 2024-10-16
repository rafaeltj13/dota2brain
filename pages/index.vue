<script setup lang="ts">
useHead({
  title: "Dota2Brain",
});
</script>

<template>
  <div class="bg-background">
    <LayoutBanner v-motion-fade-visible-once />
    <TrendingHeroList v-motion-slide-visible-bottom />
  </div>
</template>
