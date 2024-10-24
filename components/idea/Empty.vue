<template>
  <div class="flex flex-col gap-4 items-center w-full">
    <p class="text-3xl font-bold">No ideas for this hero yet</p>
    <Button class="text-xl" size="lg" @click="navigateTo('/idea/create')"
      >Be the first to create one!</Button
    >
    <Button
      class="text-xl"
      size="lg"
      variant="outline"
      @click="navigateTo('/hero/search')"
      >Find a new hero</Button
    >
  </div>
</template>
