import { useSupabase } from '~/composables/useSupabase'
import { Database } from '~/database.types';

export default defineEventHandler(async (event) => {
  try {
    const { data: ideas, error } = await useSupabase()
      .from('ideas')
      .select('*, hero(*), firstSection(*), secondSection(*), thirdSection(*), fourthSection(*), fifthSection(*)')
    
    if (error) {
      throw error
    }
    
    return { data: ideas as Database['public']['Tables']['ideas']['Row'][], error: null }
  } catch (error) {
    console.error('Error fetching ideas data:', error)
    return { data: [], error: 'Failed to fetch ideas data' }
  }
})