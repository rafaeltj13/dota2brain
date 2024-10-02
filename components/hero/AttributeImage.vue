<script setup lang="ts">
const props = defineProps({
  heroAttribute: {
    type: String,
    required: true,
  },
});

const heroAttribute = computed(() => {
  switch (props.heroAttribute.toLowerCase()) {
    case "str":
      return "strength";
    case "agi":
      return "agility";
    case "int":
      return "intelligence";
    default:
      return "universal";
  }
});
</script>

<template>
  <img
    :src="`https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${heroAttribute.toLowerCase()}.png`"
    class="w-8 h-8 inline-block mr-1"
    :alt="heroAttribute"
  />
</template>
