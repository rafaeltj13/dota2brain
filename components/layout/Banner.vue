<template>
  <div
    style="background-image: url('/dark-bg.png')"
    class="w-full h-[60rem] bg-cover bg-center"
  >
    <div
      class="max-w-screen-xl h-full mx-auto text-center flex flex-col items-center justify-center"
    >
      <h2 class="text-3xl font-bold pb-4">
        It's impossible to know everything about this game
      </h2>
      <h1 class="text-6xl font-bold">
        You should use a second <span class="text-primary">Brain</span>
      </h1>
      <div class="relative w-full items-center mt-12">
        <Input
          id="search"
          type="text"
          placeholder="Search for a hero..."
          class="pl-10 h-12"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-4"
        >
          <Icon name="ic:baseline-search" class="text-input" />
        </span>
      </div>
    </div>
  </div>
</template>
