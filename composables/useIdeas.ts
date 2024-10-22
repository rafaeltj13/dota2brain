export function useIdeas() {
  const fetchIdeas = async () => {
    const { data, error } = await useFetch("/api/idea/list");
    return data.value?.data as IIdea[];
  };

  const fetchIdea = async (id: string) => {
    const { data, error } = await useFetch(`/api/idea/${id}`);
    if (error.value) {
      console.error("Error fetching idea:", error.value);
      return null;
    }
    return data.value?.data as IIdea;
  };

  const fetchOtherIdeas = async (currentIdeaId: number | string) => {
    const { data, error } = await useFetch("/api/idea/list");
    if (error.value) {
      console.error("Error fetching other ideas:", error.value);
      return [];
    }

    const otherIdeas = data.value?.data.filter((idea) => {
      return String(idea.id) !== String(currentIdeaId);
    }) as IIdea[];

    return otherIdeas;
  };

  const fetchHeroIdeas = async (hero: IHero) => {
    const { data } = await useFetch(`/api/idea/hero/${hero.id}`);
    return data.value?.data.map(
      (idea) => ({ ...idea, hero: hero } as IIdea)
    ) as IIdea[];
  };

  return {
    fetchIdeas,
    fetchIdea,
    fetchOtherIdeas,
    fetchHeroIdeas,
  };
}
