"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/client";
import BuilderEditor from "@/app/components/builder/BuilderEditor";

export default function BuilderPage({ params }: { params: { slug: string } }) {
    const [json, setJson] = useState(null);
    const resolvedParams = use(params as unknown as Promise<{ slug: string }>);

    console.log("El params es: ", resolvedParams);

    useEffect(() => {
        const fetchConfig = async () => {
            const { data } = await supabase
                .from("page_builder_configs")
                .select("config")
                .eq("slug", resolvedParams.slug)
                .single();
            setJson(data?.config || null);
        };
        fetchConfig();
    }, [resolvedParams.slug]);

    return (
        <main className="flex flex-col p-4 h-screen">
            <h1 className="text-xl font-bold mb-4">Builder: {resolvedParams.slug}</h1>
            <BuilderEditor slug={resolvedParams.slug} json={json} />
        </main>
    );
}
