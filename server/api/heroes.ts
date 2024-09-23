const OPENDOTA_API_URL = 'https://api.opendota.com/api'
const HERO_IMAGE_BASE_URL = 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/'

// Mapping of hero names to their corresponding image URLs
const heroImageMap: { [key: string]: string } = {
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

interface OpenDotaHero {
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

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`${OPENDOTA_API_URL}/heroes`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const heroes: OpenDotaHero[] = await response.json()
    
    // Process the hero data
    const processedHeroes: ProcessedHero[] = heroes.map((hero: OpenDotaHero) => {
      const heroName = heroImageMap[hero.localized_name] || hero.localized_name
      return {
        id: hero.id,
        name: hero.localized_name,
        primaryAttr: hero.primary_attr,
        attackType: hero.attack_type,
        roles: hero.roles,
        img: `${HERO_IMAGE_BASE_URL}${heroName.toLowerCase().replace('-', '').replace(' ', '_')}.png`,
        icon: `${HERO_IMAGE_BASE_URL}${heroName.toLowerCase().replace('-', '').replace(' ', '_')}.png`
      }
    })
    
    return { data: processedHeroes as unknown as ProcessedHero[], error: null } 
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return { data: [],error: 'Failed to fetch hero data' }
  }
})