<script setup lang="ts">
const props = defineProps({
  idea: {
    type: Object as () => IIdea,
    required: true,
  },
});

const gameIdeas = computed(() => {
  return [
    props.idea.firstSection,
    props.idea.secondSection,
    props.idea.thirdSection,
    props.idea.fourthSection,
    props.idea.fifthSection,
  ].filter((section) => section);
});
</script>

<template>
  <!-- Desktop -->
  <Tabs
    :default-value="gameIdeas[0].title"
    class="w-full mx-8 lg:mx-0 hidden sm:block"
  >
    <TabsList>
      <TabsTrigger
        v-for="idea in gameIdeas"
        :key="idea.title"
        :value="idea.title"
      >
        {{ idea.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="idea in gameIdeas"
      :key="idea.title"
      :value="idea.title"
    >
      <div class="flex flex-col gap-4 pt-8" v-motion-slide-right>
        <p class="text-3xl font-bold pb-4">{{ idea.title }}</p>
        <p class="text-xl">{{ idea.description }}</p>
        <div class="flex gap-2 items-start pt-4">
          <Badge
            v-for="badge in idea.badges.split(',')"
            :key="badge"
            variant="secondary"
            >{{ badge }}</Badge
          >
        </div>
      </div>
    </TabsContent>
  </Tabs>
  <!-- Mobile -->
  <Tabs
    :default-value="gameIdeas[0].title"
    class="mx-8 lg:mx-0 w-[400px] sm:hidden block"
    orientation="vertical"
  >
    <TabsList class="grid w-full grid-cols-1">
      <TabsTrigger
        v-for="idea in gameIdeas"
        :key="idea.title"
        :value="idea.title"
      >
        {{ idea.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="idea in gameIdeas"
      :key="idea.title"
      :value="idea.title"
    >
      <div class="flex justify-between items-start pt-8">
        <p class="text-3xl">{{ idea.description }}</p>
        <div class="flex gap-2 items-start pt-4">
          <Badge
            v-for="badge in idea.badges.split(',')"
            :key="badge"
            variant="secondary"
            >{{ badge }}</Badge
          >
        </div>
      </div>
    </TabsContent>
  </Tabs>
</template>
