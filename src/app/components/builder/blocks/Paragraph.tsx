import { useNode } from "@craftjs/core";

export function Paragraph({ text = "Lorem ipsum dolor sit amet..." }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <p ref={(ref) => connect(drag(ref))} className="text-base my-2">
            {text}
        </p>
    );
}

Paragraph.craft = {
    props: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    displayName: "Paragraph",
};
