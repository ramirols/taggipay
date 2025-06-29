import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";

export function Heading({ text = "Título de ejemplo" }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <CraftElementWrapper>
      <h1 ref={(ref) => { if (ref) connect(drag(ref)); }}
        className="text-3xl font-bold my-2">
        {text}
      </h1>
    </CraftElementWrapper>
  );
}

Heading.craft = {
  props: {
    text: "Título de ejemplo",
  },
  displayName: "Heading",
};
