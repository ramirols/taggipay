"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/client";
import BuilderEditor from "@/app/components/builder/BuilderEditor";
import type { SerializedNodes } from "@craftjs/core";

export default function Page({ params }: { params: { slug: string } }) {
    const [json, setJson] = useState<SerializedNodes | null>(null);

    useEffect(() => {
        const fetchConfig = async () => {
            const { data } = await supabase
                .from("page_builder_configs")
                .select("config")
                .eq("slug", params.slug)
                .single();

            setJson(data?.config || null);
        };

        fetchConfig();
    }, [params.slug]);

    return (
        <main className="flex flex-col p-4 h-screen">
            <h1 className="text-xl font-bold mb-4">Builder: {params.slug}</h1>
            <BuilderEditor slug={params.slug} json={json} />
        </main>
    );
}