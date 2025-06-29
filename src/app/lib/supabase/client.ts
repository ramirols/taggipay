
import { createBrowserClient } from "@supabase/ssr";

let _supabase;

if (!_supabase) {
    _supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}

export const supabase = _supabase;