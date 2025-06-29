import { RenderPage } from "@/app/components/builder/RenderPage";
import { createPublicServerSupabaseClient } from "@/app/lib/supabase/public-server";

export default async function LandingPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const supabase = createPublicServerSupabaseClient();

    const { data, error } = await supabase
        .from("page_builder_configs")
        .select("config")
        .eq("slug", slug)
        .maybeSingle();

    console.log("El data es: ", data);
    console.log("El error es: ", error);

    if (error || !data?.config) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Página no encontrada ❌</h1>
            </main>
        );
    }

    console.log("El data.config es: ", data.config);

    return (
        <main className="min-h-screen">
            <RenderPage json={data.config} />
        </main>
    );
}
