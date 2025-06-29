import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import { useCallback } from "react";

export function Paragraph({ text = "Lorem ipsum dolor sit amet..." }) {
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
                <p className="text-base my-2">{text}</p>
            </div>
        </CraftElementWrapper>
    );
}

Paragraph.craft = {
    props: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    displayName: "Paragraph",
};