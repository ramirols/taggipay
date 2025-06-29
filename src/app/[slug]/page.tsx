import { RenderPage } from "@/app/components/builder/RenderPage";
import { createPublicServerSupabaseClient } from "@/app/lib/supabase/public-server";
import type { Metadata } from "next";

type LandingPageProps = {
    params: {
        slug: string;
    };
};

export const metadata: Metadata = {
    title: "Página dinámica",
    description: "Render de página creada con el builder",
};

export default async function LandingPage({ params }: LandingPageProps) {
    const { slug } = params;

    const supabase = createPublicServerSupabaseClient();

    const { data, error } = await supabase
        .from("page_builder_configs")
        .select("config")
        .eq("slug", slug)
        .maybeSingle();

    if (error || !data?.config) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-center">Página no encontrada ❌</h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <RenderPage json={data.config} />
        </main>
    );
}