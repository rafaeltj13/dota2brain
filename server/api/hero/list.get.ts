import { OPENDOTA_API_URL, OpenDotaHero, heroImageMap, HERO_IMAGE_BASE_URL, ProcessedHero } from "~/server/utils"

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
    return { data: [], error: 'Failed to fetch hero data' }
  }
})