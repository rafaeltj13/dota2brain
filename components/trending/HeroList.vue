<template>
  <div class="flex flex-col gap-4 max-w-screen-2xl py-40 mx-auto">
    <h1 class="text-5xl font-bold flex items-center gap-2 pb-4">
      <Icon name="ic:baseline-trending-up" class="w-10 h-10" />
      Trending
    </h1>
    <div class="flex justify-between items-center gap-8">
      <HeroCardIdea
        hero-name="alchemist"
        hero-attribute="strength"
        :badges="['Carry', 'Disabler', 'Nuker']"
        :upvotes="100"
        hero-image-url="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist_full.png"
      />
      <HeroCardIdea
        hero-name="antimage"
        hero-attribute="agility"
        :badges="['Carry', 'Escape', 'Nuker']"
        :upvotes="82"
        hero-image-url="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage_full.png"
      />
      <HeroCardIdea
        hero-name="dark_seer"
        hero-attribute="universal"
        :badges="['Disabler', 'Escape', 'Nuker']"
        :upvotes="49"
        hero-image-url="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer_full.png"
      />
    </div>
  </div>
</template>
