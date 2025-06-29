import { useNode } from "@craftjs/core";

export function ButtonBlock({ label = "Click me!" }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <button
            ref={(ref) => connect(drag(ref))}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80 transition"
        >
            {label}
        </button>
    );
}

ButtonBlock.craft = {
    props: {
        label: "Click me!",
    },
    displayName: "Button",
};
