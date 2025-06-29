import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";

export function Paragraph({ text = "Lorem ipsum dolor sit amet..." }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <CraftElementWrapper>
            <p ref={(ref) => { if (ref) connect(drag(ref)); }} className="text-base my-2">
                {text}
            </p>
        </CraftElementWrapper>
    );
}

Paragraph.craft = {
    props: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    displayName: "Paragraph",
};
