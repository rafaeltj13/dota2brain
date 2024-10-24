<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { createReusableTemplate } from "@vueuse/core";
import { ref, computed } from "vue";

interface Option {
  value: string | number;
  label: string;
}

const { fetchHeroes } = useHeroes();

const heroes = ref<IHero[]>([]);
const heroOptions = ref<Option[]>([]);

heroes.value = await fetchHeroes();
heroOptions.value = heroes.value.map((hero) => ({
  value: hero.id ?? 0,
  label: hero.name ?? "Unknown Hero",
}));

const [UseTemplate, StatusList] = createReusableTemplate();
const isOpen = ref(false);
const selectedOption = ref<Option | null>(null);

function onOptionSelect(option: Option) {
  selectedOption.value = option;
  isOpen.value = false;
}
</script>

<template>
  <div v-if="heroOptions.length > 0">
    <UseTemplate>
      <Command>
        <CommandInput placeholder="Filter heroes..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="hero of heroOptions"
              :key="hero.value"
              :value="hero.value"
              @select="onOptionSelect(hero)"
            >
              {{ hero.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </UseTemplate>

    <Drawer
      :open="isOpen"
      @update:open="(newOpenValue) => (isOpen = newOpenValue)"
    >
      <DrawerTrigger as-child>
        <Button variant="outline" class="w-full justify-between">
          <p>
            {{ selectedOption ? selectedOption.label : "Choose hero" }}
          </p>
          <Icon name="heroicons:chevron-down" class="w-4 h-4 text-foreground" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <StatusList />
      </DrawerContent>
    </Drawer>
  </div>
</template>
