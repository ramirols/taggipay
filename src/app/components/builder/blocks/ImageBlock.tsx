import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import Image from "next/image";

export function ImageBlock({ src = "https://placehold.co/600x400", alt = "Image" }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <CraftElementWrapper>
            <Image
                ref={(ref) => { if (ref) connect(drag(ref)); }}
                src={src}
                alt={alt}
                className="w-full h-auto rounded"
            />
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
