import { useNode } from "@craftjs/core";

export function Heading({ text = "Título de ejemplo" }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <h1 ref={(ref) => connect(drag(ref))} className="text-3xl font-bold my-2">
      {text}
    </h1>
  );
}

Heading.craft = {
  props: {
    text: "Título de ejemplo",
  },
  displayName: "Heading",
};
