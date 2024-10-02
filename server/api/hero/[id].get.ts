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
      .single()
    
    if (error) {
      throw error
    }
    
    return { data: { ...hero } as Database['public']['Tables']['heroes']['Row'], error: null }
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return { data: { name: "Unknown Hero" }, error: 'Failed to fetch hero data' }
  }
})