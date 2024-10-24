import { useSupabase } from '~/composables/useSupabase'

export default defineEventHandler(async (event) => {
  try {
    const { data: ideas, error } = await useSupabase()
      .from('ideas')
      .select('*, hero(*), firstSection(*), secondSection(*), thirdSection(*), fourthSection(*), fifthSection(*)')
      .returns<IIdea[]>()
    
    if (error) {
      throw error
    }
    
    return { data: ideas as IIdea[], error: null }
  } catch (error) {
    console.error('Error fetching ideas data:', error)
    return { data: [], error: 'Failed to fetch ideas data' }
  }
})