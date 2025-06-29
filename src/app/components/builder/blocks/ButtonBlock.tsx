import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import { useCallback } from "react";

export function ButtonBlock({ label = "Click me!" }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    const setRef = useCallback(
        (ref: HTMLButtonElement | null) => {
            if (ref) {
                connect(drag(ref));
            }
        },
        [connect, drag]
    );

    return (
        <CraftElementWrapper>
            <button
                ref={setRef}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80 transition"
            >
                {label}
            </button>
        </CraftElementWrapper>
    );
}

ButtonBlock.craft = {
    props: {
        label: "Click me!",
    },
    displayName: "Button",
};
