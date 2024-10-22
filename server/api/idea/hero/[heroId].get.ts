import { useSupabase } from "~/composables/useSupabase";
import { Database } from "~/database.types";

export default defineEventHandler(async (event) => {
  try {
    const heroId = event.context.params?.heroId;
    if (!heroId) {
      throw new Error("Invalid heroId");
    }

    const { data: ideas, error } = await useSupabase()
      .from("ideas")
      .select(
        "*, firstSection(*), secondSection(*), thirdSection(*), fourthSection(*), fifthSection(*)"
      )
      .eq("hero", heroId)
      .returns<IIdea[]>();

    if (error) {
      throw error;
    }

    return { data: ideas as IIdea[], error: null };
  } catch (error) {
    console.error("Error fetching ideas data:", error);
    return { data: [], error: "Failed to fetch ideas data" };
  }
});
