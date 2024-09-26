import { useSupabase } from '~/composables/useSupabase'

export default defineEventHandler(async (event) => {
  try {
    const { data: heroes, error } = await useSupabase()
      .from('heroes')
      .select('*')
    
    if (error) {
      throw error
    }
    
    return { data: heroes, error: null }
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return { data: [], error: 'Failed to fetch hero data' }
  }
})