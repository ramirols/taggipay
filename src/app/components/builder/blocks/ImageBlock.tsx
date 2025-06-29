import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import Image from "next/image";
import { useCallback } from "react";

export function ImageBlock({ src = "https://placehold.co/600x400", alt = "Image" }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    const setRef = useCallback(
        (ref: HTMLDivElement | null) => {
            if (ref) {
                connect(drag(ref));
            }
        },
        [connect, drag]
    );

    return (
        <CraftElementWrapper>
            <div ref={setRef}>
                <Image
                    src={src}
                    width={600}
                    height={400}
                    alt={alt}
                    className="w-full h-auto rounded"
                />
            </div>
        </CraftElementWrapper>
    );
}

ImageBlock.craft = {
    props: {
        src: "https://placehold.co/600x400",
        alt: "Image",
    },
    displayName: "Image",
};