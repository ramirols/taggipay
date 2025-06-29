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
import toast from "react-hot-toast";

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

type BuilderEditorProps = {
  slug: string;
  json: Record<string, any> | null;
};

export default function BuilderEditor({ slug, json }: BuilderEditorProps) {
  return (
    <Editor resolver={resolver}>
      <BuilderContent slug={slug} json={json} />
    </Editor>
  );
}

type BuilderContentProps = {
  slug: string;
  json: Record<string, any> | null;
};

function BuilderContent({ slug, json }: BuilderContentProps) {
  const { query, actions } = useEditor();

  useEffect(() => {
    if (json) {
      actions.deserialize(json);
    }
  }, [json, actions]);

  const handleSave = async () => {
    const config = query.serialize();

    const { error } = await supabase
      .from("page_builder_configs")
      .upsert([{ slug, config }], { onConflict: "slug" });

    if (error) {
      toast.error("Error al guardar. Intenta nuevamente.");
    } else {
      toast.success("Página guardada exitosamente ✅");
    }
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
            <div /> {/* Children requerido */}
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