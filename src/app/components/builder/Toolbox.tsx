"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Toolbox() {
    const heroRef = useRef<HTMLButtonElement>(null);
    const productListRef = useRef<HTMLButtonElement>(null);
    const sectionRef = useRef<HTMLButtonElement>(null);
    const headingRef = useRef<HTMLButtonElement>(null);
    const paragraphRef = useRef<HTMLButtonElement>(null);
    const imageRef = useRef<HTMLButtonElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const carouselRef = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <h3 className="font-semibold mb-2">Componentes</h3>
            <Button
                ref={heroRef}
                variant="outline"
                className="mb-2 w-full"
            >
                Hero
            </Button>
            <Button
                ref={productListRef}
                variant="outline"
                className="w-full mb-2"
            >
                Product List
            </Button>
            <Button ref={sectionRef} variant="outline" className="mb-2 w-full">Section</Button>
            <Button ref={headingRef} variant="outline" className="mb-2 w-full">Heading</Button>
            <Button ref={paragraphRef} variant="outline" className="mb-2 w-full">Paragraph</Button>
            <Button ref={imageRef} variant="outline" className="mb-2 w-full">Image</Button>
            <Button ref={buttonRef} variant="outline" className="mb-2 w-full">Button</Button>
            <Button ref={carouselRef} variant="outline" className="mb-2 w-full">Carousel</Button>
        </div>
    );
}
