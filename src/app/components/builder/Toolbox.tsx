"use client";

import { useEditor } from "@craftjs/core";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Hero } from "./blocks/Hero";
import { ProductList } from "./blocks/ProductList";
import { Section } from "./blocks/Section";
import { Heading } from "./blocks/Heading";
import { Paragraph } from "./blocks/Paragraph";
import { ImageBlock } from "./blocks/ImageBlock";
import { ButtonBlock } from "./blocks/ButtonBlock";
import { Carousel } from "./blocks/Carousel";

export default function Toolbox() {
    const blocks = [
        { name: "Hero", component: <Hero /> },
        { name: "Product List", component: <ProductList /> },
        { name: "Section", component: <Section>{null}</Section> },
        { name: "Heading", component: <Heading /> },
        { name: "Paragraph", component: <Paragraph /> },
        { name: "Image", component: <ImageBlock /> },
        { name: "Button", component: <ButtonBlock /> },
        { name: "Carousel", component: <Carousel /> },
    ];

    return (
        <div className="p-2 border-r bg-white w-[200px]">
            <h3 className="font-semibold mb-4">Componentes</h3>
            {blocks.map(({ name, component }) => (
                <ToolboxItem key={name} name={name} component={component} />
            ))}
        </div>
    );
}

function ToolboxItem({
    name,
    component,
}: {
    name: string;
    component: React.ReactElement;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const { connectors } = useEditor();

    useEffect(() => {
        if (ref.current) {
            connectors.create(ref.current, component);
        }
    }, [ref, component, connectors]);

    return (
        <Button
            ref={ref}
            variant="outline"
            className="mb-2 w-full text-left"
        >
            {name}
        </Button>
    );
}