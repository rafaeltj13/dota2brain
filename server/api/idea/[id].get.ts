import { useSupabase } from '~/composables/useSupabase'
import { Database } from '~/database.types';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;
    if (!id) {
      throw new Error('Invalid id');
    }

    const { data: ideas, error } = await useSupabase()
      .from('ideas')
      .select('*, hero(*), firstSection(*), secondSection(*), thirdSection(*), fourthSection(*), fifthSection(*)')
      .eq('id', id)
      .returns<IIdea>()
      .single()
      
    if (error) {
      throw error
    }
    
    return { data: ideas as IIdea, error: null }
  } catch (error) {
    console.error('Error fetching ideas data:', error)
    return { data: [], error: 'Failed to fetch ideas data' }
  }
})
