"use client";

import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import Toolbox from "./Toolbox";
import { Hero } from "./blocks/Hero";
import { ProductList } from "./blocks/ProductList";
import { Button } from "@/components/ui/button";
import { supabase } from "@/app/lib/supabase/client";
import { useEffect } from "react";
import { Section } from "./blocks/Section";
import { Heading } from "./blocks/Heading";
import { Paragraph } from "./blocks/Paragraph";
import { ImageBlock } from "./blocks/ImageBlock";
import { ButtonBlock } from "./blocks/ButtonBlock";
import { Carousel } from "./blocks/Carousel";
import { Container } from "./blocks/Container";
import { SidebarPanel } from "./SidebarPanel";

const resolver = {
  Hero,
  ProductList,
  Section,
  Heading,
  Paragraph,
  ImageBlock,
  ButtonBlock,
  Carousel,
  Container,
};

export default function BuilderEditor({ slug, json }: { slug: string; json: any }) {
  return (
    <Editor resolver={resolver}>
      <BuilderContent supabase={supabase} slug={slug} json={json} />
    </Editor>
  );
}

function BuilderContent({ supabase, slug, json }: { supabase: any; slug: string; json: any }) {
  const { query, actions } = useEditor();

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
    <div className="flex w-full h-full">
      <aside>
        <Toolbox />
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        <Frame>
          <Element
            is={Container}
            canvas
            id="ROOT"
            custom={{ className: "min-h-[500px] border p-4" }}
          >
            <div /> {/* hijo vacío para cumplir con children */}
          </Element>
        </Frame>
        <Button className="mt-4 w-full" onClick={handleSave}>
          Guardar
        </Button>
      </main>
      <aside>
        <SidebarPanel />
      </aside>
    </div>
  );
}
