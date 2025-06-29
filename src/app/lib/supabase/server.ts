{/*import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

export const createServerSupabaseClient = (): SupabaseClient | null => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn("❌ SUPABASE_URL o SUPABASE_ANON_KEY no definidos.");
    return null;
  }

  const cookieStore = cookies();

  return createServerClient(url, key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        // @ts-ignore - next/headers.cookies.set no tipa igual que espera supabase/ssr
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        // @ts-ignore
        cookieStore.set({ name, value: "", ...options });
      },
    },
  });
};*/}
