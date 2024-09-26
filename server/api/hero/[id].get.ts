import { HERO_IMAGE_BASE_URL, heroImageMap, OPENDOTA_API_URL, OpenDotaHero, ProcessedHero } from "~/server/utils";

export default defineEventHandler(async (event) => {
  try {
    const heroId = getRouterParam(event, 'id')

    console.log({ heroId })

    if (!heroId) {
      throw new Error("Hero ID is missing");
    }

    const response = await fetch(`${OPENDOTA_API_URL}/heroes/${heroId}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const hero: OpenDotaHero = await response.json()
    
    // Process the hero data
    const heroName = heroImageMap[hero.localized_name] || hero.localized_name
    const processedHero: ProcessedHero = {
      id: hero.id,
      name: hero.localized_name,
      primaryAttr: hero.primary_attr,
      attackType: hero.attack_type,
      roles: hero.roles,
      img: `${HERO_IMAGE_BASE_URL}${heroName.toLowerCase().replace('-', '').replace(' ', '_')}.png`,
      icon: `${HERO_IMAGE_BASE_URL}${heroName.toLowerCase().replace('-', '').replace(' ', '_')}.png`
    }
    
    return { data: processedHero as unknown as ProcessedHero, error: null } 
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return { data: null, error: 'Failed to fetch hero data' }
  }
})