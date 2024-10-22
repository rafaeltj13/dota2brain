import { useSupabase } from '~/composables/useSupabase'
import { Database } from '~/database.types';

export default defineEventHandler(async (event) => {
  try {
    const heroId = getRouterParam(event, 'id')

    if (!heroId) {
      throw new Error("Hero ID is missing");
    }

    const { data: hero, error } = await useSupabase()
      .from('heroes')
      .select('*')
      .eq('id', heroId)
      .returns<IHero>()
      .single()
    
    if (error) {
      throw error
    }
    
    return { data: hero as IHero, error: null }
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return { data: null, error: 'Failed to fetch hero data' }
  }
})