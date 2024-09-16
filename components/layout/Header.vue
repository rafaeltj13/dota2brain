<script lang="ts" setup>
const isScrollAtTop = ref(true);

const handleScroll = () => {
  isScrollAtTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="z-50 fixed flex bg-background items-center justify-between rounded-xl lg:w-full max-w-screen-xl h-16 mx-4 lg:mx-auto lg:px-0 top-2 left-0 right-0 border-0"
    :class="{
      'shadow-xl !border !opacity-90 z-50 transition-all duration-200 lg:px-6 bg-slate-200':
        !isScrollAtTop,
      'opacity-100 z-50 transition-all duration-200 lg:px-0': isScrollAtTop,
    }"
  >
    <div class="flex items-center gap-2 w-48">
      <img src="/logo.svg" alt="logo" class="w-10 h-10" />
      <p class="text-xl font-bold text-red-700">Dota 2 Brain</p>
    </div>
    Search on scroll
    <div class="flex items-center justify-end gap-4 w-48">
      <p class="text-sm font-bold text-red-700">About</p>
      <Icon name="ic:baseline-account-circle" class="w-6 h-6 text-red-700" />
    </div>
  </div>
</template>
