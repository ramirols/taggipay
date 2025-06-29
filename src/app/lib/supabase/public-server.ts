import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

export const createPublicServerSupabaseClient = (): SupabaseClient | null => {
  try {
    const url = process.env.SUPABASE_URL;
    const anonKey = process.env.SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      // No lanzar error, solo advertencia
      console.warn("⚠️ Supabase URL o Anon Key no están definidas. Se ignora el cliente.");
      return null;
    }

    // Cachear la instancia
    if (!supabase) {
      supabase = createClient(url, anonKey);
    }

    return supabase;
  } catch (error) {
    console.error("Error creando el cliente de Supabase:", error);
    return null;
  }
};
