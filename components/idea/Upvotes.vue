<script setup lang="ts">
defineProps({
  upvotes: {
    type: Number,
    required: true,
  },
  size: {
    type: String as PropType<"lg" | "md">,
    default: "lg",
  },
});
</script>

<template>
  <p :class="['font-bold flex gap-2', size === 'lg' ? 'text-3xl' : 'text-xl']">
    {{ upvotes }}
    <Icon
      name="ic:baseline-arrow-upward"
      :class="[size === 'lg' ? 'w-8 h-8' : 'w-6 h-6']"
    />
  </p>
</template>
