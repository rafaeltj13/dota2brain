<script setup lang="ts">
const props = defineProps<{
  ideas: IIdea[];
}>();

const getBadges = (idea: IIdea) => {
  const sections = [
    idea.firstSection,
    idea.secondSection,
    idea.thirdSection,
    idea.fourthSection,
    idea.fifthSection,
  ];
  const badges = sections
    .filter((section) => section && section.badges && section.badges.length > 0)
    .map((section) => section.badges.split(",")[0])
    .splice(0, 3);
  return badges;
};
</script>

<template>
  <div
    class="gap-6 px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
  >
    <IdeaItem
      v-for="idea in ideas"
      :key="String(idea.id)"
      :id="idea.id"
      :title="idea.title"
      :badges="getBadges(idea)"
      :img="idea.hero?.img || ''"
      :upvotes="idea.upvotes"
    />
  </div>
</template>
