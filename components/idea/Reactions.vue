<script setup lang="ts">
defineProps({
  upvotes: {
    type: Number,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- <Button variant="outline" class="w-20 flex items-center gap-2">
      <span class="font-bold text-md">
        {{ upvotes }}
      </span>
      <Icon name="ic:baseline-arrow-upward" class="w-6 h-6" />
    </Button> -->
    <p class="font-bold text-xl">{{ upvotes }}</p>
    <Button variant="outline" size="icon">
      <Icon name="ic:baseline-arrow-upward" class="w-6 h-6" />
    </Button>
    <Button variant="outline" size="icon">
      <Icon name="ic:baseline-arrow-downward" class="w-6 h-6" />
    </Button>
    <Button variant="outline" size="icon">
      <Icon
        :name="
          isFavorite ? 'ic:baseline-favorite' : 'ic:baseline-favorite-border'
        "
        class="w-6 h-6"
      />
    </Button>
  </div>
</template>
