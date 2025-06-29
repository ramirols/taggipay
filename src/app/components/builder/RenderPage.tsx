"use client";

import { Editor, Frame } from "@craftjs/core";
import { Hero } from "./blocks/Hero";
import { ProductList } from "./blocks/ProductList";
import { Section } from "./blocks/Section";
import { Heading } from "./blocks/Heading";
import { Paragraph } from "./blocks/Paragraph";
import { ImageBlock } from "./blocks/ImageBlock";
import { ButtonBlock } from "./blocks/ButtonBlock";
import { Carousel } from "./blocks/Carousel";
import { Container } from "./blocks/Container";

type RenderPageProps = {
    json: string;
};

export function RenderPage({ json }: RenderPageProps) {
    return (
        <Editor
            resolver={{
                Hero,
                ProductList,
                Section,
                Heading,
                Paragraph,
                ImageBlock,
                ButtonBlock,
                Carousel,
                Container,
            }}
            enabled={false}
        >
            <Frame json={json} />
        </Editor>
    );
}