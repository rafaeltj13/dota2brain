<script setup lang="ts">
defineProps({
  gameIdeas: {
    type: Array as () => {
      title: string;
      badges: string[];
      description: string;
    }[],
    required: true,
  },
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
      <p class="text-3xl">{{ idea.description }}</p>
      <div class="flex gap-2 items-start pt-4">
        <Badge v-for="badge in idea.badges" :key="badge" variant="secondary">{{
          badge
        }}</Badge>
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
      <p class="text-3xl">{{ idea.description }}</p>
      <div class="flex gap-2 items-start pt-4">
        <Badge v-for="badge in idea.badges" :key="badge" variant="secondary">{{
          badge
        }}</Badge>
      </div>
    </TabsContent>
  </Tabs>
</template>
