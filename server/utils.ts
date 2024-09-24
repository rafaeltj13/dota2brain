export const OPENDOTA_API_URL = 'https://api.opendota.com/api'
export const HERO_IMAGE_BASE_URL = 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/'

// Mapping of hero names to their corresponding image URLs
export const heroImageMap: { [key: string]: string } = {
  'Shadow Fiend': 'nevermore',
  'Vengeful Spirit': 'vengefulspirit',
  'Windranger': 'windrunner',
  'Zeus': 'zuus',
  'Necrophos': 'necrolyte',
  'Queen of Pain': 'queenofpain',
  'Wraith King': 'skeleton_king',
  'Underlord': 'abyssal_underlord',
  'Clockwerk': 'rattletrap',
  'Nature\'s Prophet': 'furion',
  'Lifestealer': 'life_stealer',
  'Shadow Shaman': 'shadow_shaman',
  'Witch Doctor': 'witch_doctor',
  'Doom': 'doom_bringer',
  'Outworld Destroyer': 'obsidian_destroyer',
  'Shadow Demon': 'shadow_demon',
  'Treant Protector': 'treant',
  'Keeper of the Light': 'keeper_of_the_light',
  'Io': 'wisp',
  'Centaur Warrunner': 'centaur',
  'Magnus': 'magnataur',
  'Timbersaw': 'shredder',
  'Winter Wyvern': 'winter_wyvern',
}

export interface OpenDotaHero {
  id: number
  localized_name: string
  primary_attr: string
  attack_type: string
  roles: string[]
  img: string
  icon: string
}

export interface ProcessedHero {
  id: number
  name: string
  primaryAttr: string
  attackType: string
  roles: string[]
  img: string
  icon: string
}