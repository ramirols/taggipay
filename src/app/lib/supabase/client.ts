
//import { createBrowserClient } from "@supabase/ssr";

import { createClient } from "@supabase/supabase-js";

let _supabase;

if (!_supabase) {
    _supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}

export const supabase = _supabase;