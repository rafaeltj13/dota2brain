<script setup lang="ts">
const { id } = useRoute().params;

const { data, error } = useFetch(`/api/hero/${id}`);

const hero = computed(() => {
  return data.value?.data;
});
</script>

<template>
  <div class="bg-background pt-40 max-w-screen-xl mx-auto">
    <h1 class="text-5xl font-bold">{{ hero?.name }}</h1>
  </div>
</template>
