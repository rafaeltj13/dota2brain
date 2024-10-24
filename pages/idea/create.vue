<script setup lang="ts">
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import { Textarea } from "@/components/ui/textarea";

const loading = ref(true);

loading.value = false;

useHead({
  title: "Create new idea",
});

const title = ref("");
const description = ref("");
const tags = ref(["High pressure", "Early game"]);
</script>

<template>
  <div class="bg-background pt-32 max-w-screen-2xl mx-auto xl:px-0 px-8">
    <h1 class="text-5xl font-bold pb-8" v-motion-fade>Create new idea</h1>
    <div v-motion-slide-bottom class="flex flex-col gap-4">
      <HeroDropdown />
      <ClientOnly>
        <div class="grid lg:grid-cols-2 gap-4">
          <Input v-model="title" placeholder="Title" />
          <TagsInput size="lg" v-model="tags">
            <TagsInputItem v-for="item in tags" :key="item" :value="item">
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>

            <TagsInputInput placeholder="Tags (max. 3)" />
          </TagsInput>
        </div>
        <Textarea v-model="description" placeholder="Description" />
      </ClientOnly>
    </div>
  </div>
</template>
