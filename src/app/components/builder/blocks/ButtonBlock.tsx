import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";

export function ButtonBlock({ label = "Click me!" }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <CraftElementWrapper>
            <button
                ref={(ref) => connect(drag(ref))}
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
