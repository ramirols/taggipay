"use client";

import { Editor, Frame, Element } from "@craftjs/core";
import Toolbox from "./Toolbox";
import { Hero } from "./blocks/Hero";
import { ProductList } from "./blocks/ProductList";
import { Button } from "@/components/ui/button";
import { supabase } from "@/app/lib/supabase/client";
import { useEditor } from "@craftjs/core";
import { useEffect } from "react";
import { Section } from "./blocks/Section";
import { Heading } from "./blocks/Heading";
import { Paragraph } from "./blocks/Paragraph";
import { ImageBlock } from "./blocks/ImageBlock";
import { ButtonBlock } from "./blocks/ButtonBlock";
import { Carousel } from "./blocks/Carousel";
import { Container } from "./blocks/Container";

export default function BuilderEditor({ slug, json }: { slug: string; json: any }) {
  return (
    <Editor resolver={{ Hero, ProductList, Section, Heading, Paragraph, ImageBlock, ButtonBlock, Carousel }}>
      <BuilderContent supabase={supabase} slug={slug} json={json} />
    </Editor>
  );
}

function BuilderContent({ supabase, slug, json }: { supabase: any; slug: string; json: any }) {
  const { query, actions } = useEditor();

  // Cargar JSON si existe
  useEffect(() => {
    if (json) {
      actions.deserialize(json);
    }
  }, [json]);

  const handleSave = async () => {
    const config = query.serialize();
    const { error } = await supabase
      .from("page_builder_configs")
      .upsert([{ slug, config }], { onConflict: "slug" });

    if (!error) alert("Guardado ✅");
  };

  return (
    <Editor resolver={{ Container, Section, Heading, Paragraph, ImageBlock, ButtonBlock, Carousel }}>
      <div className="flex w-full h-full">
        <aside>
          <Toolbox />
        </aside>
        <main className="flex-1 p-4 overflow-auto">
          <Button className="mt-4 w-full" onClick={handleSave}>
            Guardar
          </Button>
        </main>
        <Frame>
          <Element is={Container} canvas id="ROOT" className="min-h-[500px] border p-4">
            <ProductList />
          </Element>
        </Frame>
      </div>
    </Editor>
  );
}
