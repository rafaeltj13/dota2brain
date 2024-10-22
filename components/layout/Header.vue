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
    class="z-50 fixed flex bg-background items-center justify-between rounded-xl w-[95%] xl:w-full max-w-screen-2xl h-16 mx-auto top-2 left-0 right-0 border-0"
    :class="{
      'shadow-xl !border !opacity-90 transition-all duration-200 px-4 bg-background xl:w-full':
        !isScrollAtTop,
      'opacity-100 transition-all duration-200 bg-transparent': isScrollAtTop,
    }"
  >
    <div
      class="flex items-center gap-2 w-60 cursor-pointer hover:scale-110 transition-all duration-150"
      @click="navigateTo('/')"
    >
      <img src="/logo.svg" alt="logo" class="w-10 h-10" />
      <p class="text-xl font-bold">
        Dota 2 <span class="text-primary">Brain</span>
      </p>
    </div>
    <div v-if="!isScrollAtTop" class="relative w-full max-w-sm items-center">
      <Input
        id="search"
        type="text"
        placeholder="Search for a hero..."
        class="pl-10"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Icon name="ic:baseline-search" class="" />
      </span>
    </div>
    <div class="flex items-center justify-end gap-4 w-60">
      <LayoutLink
        class="hover:text-primary hover:-translate-y-1 transition-all hover:font-bold"
        href="/idea/search"
        >Ideas</LayoutLink
      >
      <LayoutLink
        class="hover:text-primary hover:-translate-y-1 transition-all hover:font-bold"
        href="/hero/search"
        >Heroes</LayoutLink
      >
      <LayoutLink
        class="hover:text-primary hover:-translate-y-1 transition-all hover:font-bold"
        href="/about"
        >About</LayoutLink
      >
      <Icon name="ic:baseline-account-circle" class="w-6 h-6" />
    </div>
  </div>
</template>
