export const useHeroes = () => {
  const fetchHeroes = async () => {
    const { data } = await useFetch("/api/hero/list");
    return data.value?.data as IHero[];
  };

  const fetchHero = async (id: string) => {
    const { data } = await useFetch(`/api/hero/${id}`);
    return data.value?.data as IHero;
  };

  return { fetchHero, fetchHeroes };
};
