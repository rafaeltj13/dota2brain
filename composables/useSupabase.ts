import { SupabaseClient, createClient } from "@supabase/supabase-js";
import type { Database } from "~/database.types";

let supabaseInstance: SupabaseClient<Database> | null = null;

export const useSupabase = (): SupabaseClient<Database> => {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const config = useRuntimeConfig();

  const supabaseUrl = config.public.SUPABASE_URL as string;
  const supabaseKey = config.public.SUPABASE_KEY as string;

  supabaseInstance = createClient<Database>(supabaseUrl, supabaseKey);

  return supabaseInstance;
};