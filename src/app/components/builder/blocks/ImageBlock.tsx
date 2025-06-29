import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";

export function ImageBlock({ src = "https://placehold.co/600x400", alt = "Image" }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <CraftElementWrapper>
            <img
                ref={(ref) => connect(drag(ref))}
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
